import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Background from '../../components/Background'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import '../../styles/blog-page.css'

// Generated from content/serial-vga-writeup.md by tools/build-writeup.py.
// Edit the Markdown and re-run the script; changes made here are overwritten.

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'constraints', label: 'What fits on the chip' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'notch', label: 'The missing corner' },
  { id: 'baud', label: 'A baud mismatch, not an error' },
  { id: 'results', label: 'Results' },
]

export default function SerialVgaWriteup() {
  const [active, setActive] = useState('overview')
  const scrollingRef = useRef(false)

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting && !scrollingRef.current) setActive(id) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  const handleTocClick = (e, id) => {
    e.preventDefault()
    setActive(id)
    scrollingRef.current = true
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => { scrollingRef.current = false }, 1000)
  }

  return (
    <>
      <Background />
      <Nav />
      <article className="blog-shell">

        <header className="blog-header">
          <h1 className="title is-3">A Serial VGA Terminal, and Two Bugs That Were Not Where They Looked</h1>
          <p className="blog-meta">August 2026</p>
          <div className="blog-tags">
            {['FPGA', 'Verilog', 'Hardware'].map(t => (
              <span key={t} className="tag is-dark">{t}</span>
            ))}
          </div>
        </header>

        <div className="blog-hero hero-top">
          <img src="/projects/serial-vga-display/serial_vga_display_thumbnail.jpeg" alt="The Go Board driving text on a VGA monitor" />
        </div>

        <div className="blog-layout">

          <nav className="blog-toc">
            <h3>Contents</h3>
            <ol>
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={active === id ? 'active' : ''}
                    onClick={e => handleTocClick(e, id)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="blog-body">

            <h2 id="overview">Overview</h2>
            <p>
              Typing into a serial terminal puts the characters on a VGA monitor, without a CPU, softcore, or framebuffer. The design runs entirely on RTL, on an iCE40-HX1K on a Nandland Go Board at 25 MHz, painting a 40×30 character grid at 640×480 at 60 Hz.
            </p>
            <p>
              Two of the bugs that cost the most time were not in the module that appeared broken; instead, one seemed to be an issue with my hardware, while the other was not a bug at all.
            </p>

            <h2 id="constraints">What fits on the chip</h2>
            <p>
              The two main constraints on the system are that the font is 128 glyphs of 8 rows of 8 bits (8192 bits of glyph data) and that the part (the iCE40-HX1K chip itself, not the board around it) has 1280 LUTs.
            </p>
            <p>
              Synthesized on its own, Font_ROM maps to two SB_RAM40_4K, eight SB_LUT4 and one SB_DFF. The two block RAMs are the glyph data itself (an embedded block RAM holds 4 Kbit, and as such a 1024×8 ROM spans two blocks). The eight LUTs are a 2:1 mux per output bit, choosing which half the address landed in. The flip-flop delays the selecting address bit, such that it arrives alongside the registered read data.
            </p>
            <p>
              However, the above depends on a synchronous read; a block RAM read is registered by construction, so an asynchronous read cannot map to a block at all, leading yosys to instead try creating 8192 bits of ROM out of a part with only 1280 LUTs. As such, <em>gen_font_rom.py</em> chooses to emit an initialized array, rather than a case statement over the address.
            </p>
            <p>
              The same one-line difference is measurable on the other memory; replacing Char_RAM's clocked read with a continuous assignment synthesizes to 16,521 SB_LUT4 and 16,384 SB_DFFE, and zero block RAMs, against a part with 1,280 LUTs (thirteen times over budget, just from one line!).
            </p>
            <p>
              In this way, the shape of the design was settled before it was formalized:
            </p>
            <ul>
              <li>Characters over pixels, which leads to 2048 bytes of text buffer, instead of a 640×480 framebuffer that will not fit</li>
              <li>No softcore CPU, since a softcore CPU and its program memory would compete for the same LUTs and block RAMs</li>
              <li>The character generator must be a pipeline, given synchronous reads cost a clock</li>
            </ul>

            <h2 id="how-it-works">How it works</h2>

            <figure className="blog-image">
              <img src="/projects/serial-vga-display/architecture_diagram.png" alt="Dataflow from the host PC through the UART, parser and memories to the VGA output" />
              <figcaption>
                Five modules on one 25 MHz clock. The write port into Char_RAM is the seam bring-up hinged on; a scaffold module drove those three signals before the parser existed.
              </figcaption>
            </figure>

            <p>
              <strong>The UART.</strong> The line idles high, with a start bit pulling it low. To confirm the line is still low, the receiver waits half a bit period after seeing the edge, then samples once per bit period at what should be the middle of each of the eight data bits. A stop bit ends the frame. At 115200 baud on a 25 MHz clock, the receiver is parameterized with 217 clocks per bit, such that a ten-bit frame occupies 2170 clocks.
            </p>
            <p>
              <strong>The text buffer.</strong> Char_RAM is 2048×8 across four block RAMs, one byte per grid cell; it is 2048 deep, rather than 1200, since the generator computes an address for every pixel the monitor asks for, including the ones in the blanking intervals (the widest address reached is 1329, which needs 11 bits). Command_Parser is a four-state FSM that controls the cursor and the write port; printable bytes advance the cursor, FF clears the screen with a 1200-cycle walk, LF and CR move the cursor, and ESC uses the next two bytes to reposition the cursor.
            </p>
            <p>
              <strong>The generator.</strong> Char_Generator is three stages deep, being the Char_RAM read register, the Font_ROM read register and the output register, and as such HSync and VSync are delayed by three clocks to stay with the video they describe (an error with this delay would be invisible, since an image is still an image, and as such it needs a testbench of its own).
            </p>

            <h2 id="notch">The missing corner</h2>
            <p>
              Before the parser existed, a scaffold module walked every cell of Char_RAM once, writing a known message and then stopping, so that the render path could be proven on hardware before a byte of protocol was written.
            </p>
            <p>
              However, it seemed to render incorrectly; row 0 was blank, row 1 started about ten cells in, and everything after that was correct. Simulation never surfaced this issue, since simulation has no configuration phase, unlike hardware.
            </p>
            <p>
              The first explanation was that the monitor was clipping the top of the frame; since this issue did not seem to surface in simulations of the module, with a valid render path, it seemed that the monitor itself was discarding or clipping data in some way.
            </p>
            <p>
              However, just because the signal was correct, the display was not necessarily clipping out data. <strong>Ruling out one cause is not evidence for another, and I treated it as though it were.</strong> Notably, losing all of row 0 and just the first ten cells of row 1 is a raster-linear loss, whereas a display would clip a rectangle and take the same columns off every row; when temporarily filling every cell on screen with a single character, the missing region gains a visible notch in the top left, instead of a straight edge.
            </p>

            <figure className="blog-image">
              <img src="/projects/serial-vga-display/writeup/notch.png" alt="Every cell filled with one character, with a notch missing at the top-left of the screen" />
              <figcaption>
                Every cell written with the same character, rendered at the full 640×480 geometry. A clipped display would take a straight edge off the frame; here the loss stops mid-row, which is what a dropped write looks like rather than a hidden one.
              </figcaption>
            </figure>

            <p>
              After some research, I found that the cause is documented online; block RAM contents are “preserved (write protected) during configuration,” and configuration is not finished at the moment the design starts running: Lattice’s Programming and Configuration technical note states that after CDONE goes high, “at least 49 additional dummy bits (49 additional SPI_SCK clock cycles) should be sent before the SPI interface pins become available to the user-application.” A design on a free-running oscillator begins executing inside that window, and as such the writes it issues there are dropped silently. Holding the walk off for 4096 clocks fixes it completely.
            </p>
            <p>
              However, although the roughly 50 cells lost and the 49 documented clocks agree closely, they are counted on different clocks (the SPI configuration clock against the 25 MHz user clock), so the correspondence is suggestive rather than proven. An analogous read-side anomaly is recorded in <a href="https://github.com/YosysHQ/icestorm/issues/76" target="_blank" rel="noreferrer">icestorm issue #76</a>, where block RAM reads within about 36 cycles of reset return zero, but only on the first reset after reconfiguration.
            </p>
            <p>
              Notably, the real build does not face this issue, as Command_Parser cannot write until a UART byte arrives, and a byte occupies 2170 clocks, so the earliest possible write is far outside the window. In this way, the scaffold was unusual precisely because it started on clock one, and the startup hold stays in it for that reason.
            </p>

            <h2 id="baud">A baud mismatch, not an error</h2>
            <p>
              Eight malformed-input cases were run on the board against behavior written down in advance. Although seven of the tests went smoothly, test 6 seemed to produce unexpected results; reconnecting at 9600 baud and mashing keys was documented as producing junk characters, but instead the hardware produced a blank screen.
            </p>
            <p>
              Importantly, a baud mismatch does not cause a framing error here, as the stop-bit state in UART_RX waits out one bit period and asserts its data-valid strobe without ever checking that the stop bit is high, so nothing is rejected. In this way, it becomes much more interesting to see what bytes the receiver invents.
            </p>
            <p>
              At 9600 baud a bit lasts 2604 clocks. The receiver, still configured for 115200, samples its eight data bits at offsets 325 through 1844, all of which are still inside the 9600 start bit.
            </p>

            <figure className="blog-image">
              <img src="/projects/serial-vga-display/uart-sampling.svg" alt="Eight sample points at offsets 325 through 1844 falling inside a single 2604-clock start bit" />
              <figcaption>
                The eight samples span 1519 of the start bit’s 2604 clocks and never leave it, so all eight read zero before the receiver has any reason to think the frame is over.
              </figcaption>
            </figure>

            <p>
              As such, the board reads 0x00, returns to idle, finds the line still low, and takes that as another start bit. Each bogus frame covers only a fraction of one real 9600 bit, so its eight samples cross at most one edge of the actual signal, and every byte comes out as a run of zeros followed by a run of ones, becoming the bytes 0x00, 0xC0, 0xF0, 0xFC and 0xFE. All five fall outside 0x20 to 0x7E and hit the parser’s default branch, which discards them, leading to a blank screen.
            </p>
            <p>
              However, seeing junk characters at all needs a near miss. At 57600 baud, in test 7, the sampling window straddles data-bit boundaries instead of sitting inside one, so the bytes vary and some of them land printable.
            </p>

            <div className="blog-image-row">
              <figure className="blog-image">
                <img src="/projects/serial-vga-display/writeup/baud-9600.png" alt="Blank screen with the host at 9600 baud" />
                <figcaption>
                  9600: every invented byte falls outside the printable range, so the parser discards all of them and nothing reaches the screen.
                </figcaption>
              </figure>
              <figure className="blog-image">
                <img src="/projects/serial-vga-display/writeup/baud-57600.png" alt="Junk characters on screen with the host at 57600 baud" />
                <figcaption>
                  57600: the samples straddle real bit edges, so some invented bytes land inside the printable range and appear. The nearer miss is the one that looks broken.
                </figcaption>
              </figure>
            </div>

            <p>
              Those five byte values are the model’s, not a capture. The bytes were never scoped on hardware; only their effect on the display was observed.
            </p>

            <h2 id="results">Results</h2>
            <p>
              Across all eight hardware cases, no case required a power cycle, none left the display frozen, and none dropped sync. Sending more than 1200 characters successfully wraps the cursor to (0, 0) and keeps painting rather than piling output into one cell, which would be indistinguishable from a hang at the moment you most want to tell the two apart. Sending the test page renders every line, with the column-38 rule unbroken across all 30 rows.
            </p>

            <figure className="blog-image">
              <img src="/projects/serial-vga-display/render.png" alt="A full 640x480 frame rendered from simulation" />
              <figcaption>
                One full frame written out by the render testbench. This is evidence about the RTL rather than about the hardware; a photograph of the board is the other claim, and the two are captioned apart on purpose.
              </figcaption>
            </figure>

            <p>
              In trying to make the testbenches for the modules fail, all bugs deliberately introduced into Command_Parser were caught, while two mutations in Char_Generator passed, showing gaps in the testbench, rather than in the module.
            </p>
            <p>
              Delaying HSync 2 stages instead of 3 passed because the capture was positioned by HSync, so the bug moved its own detector; re-anchoring the capture to the frame boundary fixed it. Delaying the blanking flag once instead of twice passed because nothing on screen lit a pixel against a blanking edge; adding two glyphs that do fixed it. A testbench that passes the first time it runs has not yet demonstrated it can fail.
            </p>
            <p>
              There are still some cases that were not covered. Both baud cases were driven by hand from a terminal, so the input is whatever was typed rather than a fixed vector, and neither is reproducible as a regression test. Furthermore, only the 3×2 and 4×3 grids are simulated; the real 40×30 parameterization is exercised by synthesis and by hardware, neither of which asserts anything.
            </p>

            <hr className="blog-divider" />

            <div className="blog-footer">
              <Link className="back-link" to="/projects/serial-vga-display">&larr; Back to the project</Link>
            </div>

          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
