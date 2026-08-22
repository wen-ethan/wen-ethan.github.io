import { Link } from 'react-router-dom'
import Background from '../components/Background'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const projects = [
  {
    slug: 'serial-vga-display',
    title: 'Serial VGA Display',
    description: 'UART-controlled text display on an iCE40 FPGA, where a 40×30 character grid is drawn pixel by pixel as the VGA beam scans.',
    image: '/projects/serial-vga-display/serial_vga_display_thumbnail.jpeg',
  },
  {
    slug: 'echoassist',
    title: 'EchoAssist',
    description: 'Real-time iOS captioning app with on-device speech recognition and speaker diarization, built to break communication barriers without sending audio off the phone.',
    image: '/projects/echoassist/echoassist_thumbnail.jpeg',
    imageRight: true,
  },
  {
    slug: 'relay',
    title: 'Relay',
    description: 'Cross-platform Flutter music-sharing app built by a five-person team, where I helped build the friendship, concerts, and messaging systems and the Firestore design docs behind them.',
    image: '/projects/relay/messaging_ui.png',
  },
]

// Smaller side projects. Same pages, but presented compactly so they do not
// compete with the work above.
const sideProjects = [
  {
    slug: 'spatial-computing',
    title: 'Spatial Computing Portfolio',
    description: 'Interactive AR and spatial computing projects built during my Digital Creators Internship, exploring 3D interaction, animation, and immersive storytelling for platforms like Apple Vision Pro.',
  },
  {
    slug: 'ap-physics-c',
    title: 'AP Physics C Notes',
    description: "Built a clean notes website for AP Physics C: E&M while prepping for the AP exam and learning HTML/CSS along the way.",
  },
  {
    slug: 'google-form-autofill',
    title: 'Google Form Autofill',
    description: 'Created a Google Apps Script workflow that turns form responses into auto-filled, ready-to-submit PDFs.',
  },
]

export default function Projects() {
  return (
    <>
      <Background />
      <Nav />
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2">Projects</h1>
            <p className="subtitle is-5 mt-2">
              A collection of my most notable work.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-section page-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className={`project-card${p.imageRight ? ' image-right' : ''}`}>
                {!p.imageRight && (
                  <div className="project-image">
                    <img src={p.image} alt={p.title} loading="lazy" />
                  </div>
                )}
                <div className="project-content">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-description">{p.description}</p>
                </div>
                {p.imageRight && (
                  <div className="project-image">
                    <img src={p.image} alt={p.title} loading="lazy" />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="side-projects-section page-section">
        <div className="container">
          <h2 className="side-projects-heading">Other things I&rsquo;ve made</h2>
          <p className="side-projects-note">
            Smaller side projects, built for fun.
          </p>
          <div className="side-projects-grid">
            {sideProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="side-card"
              >
                <h3 className="side-card-title">{p.title}</h3>
                <p className="side-card-description">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
