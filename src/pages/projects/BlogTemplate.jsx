import { useEffect, useRef, useState } from 'react'
import Background from '../../components/Background'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import '../../styles/blog-page.css'

const sections = [
  { id: 'overview',   label: 'Day 0: background and overview' },
  { id: 'background', label: 'Background' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'results',    label: 'Results' },
]

export default function BlogTemplate() {
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
          <h1 className="title is-3">Your Project Title Goes Here</h1>
          <p className="blog-meta">March 2026</p>
          <div className="blog-tags">
            {['Tag One', 'Tag Two', 'Tag Three'].map(t => (
              <span key={t} className="tag is-dark">{t}</span>
            ))}
          </div>
        </header>

        <div className="blog-hero">
          <img src="/projects/spatial-computing/tiger_firefighter.png" alt="Hero image placeholder" />
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
              This is your opening paragraph. Give the reader a quick sense of what this project is,
              why you built it, and what problem it solves. Keep it punchy — one or two sentences is
              enough to hook someone before they scroll further.
            </p>
            <p>
              Add a bit more context here: what was the starting point? Was this a class project, a
              personal experiment, something you built for someone else? Set the scene before diving
              into the details.
            </p>

            <h2 id="background">Background</h2>
            <p>
              Walk through the motivation. What did you know going in, what did you not know?
              This is a good place to mention constraints — time, tools, team size, or technical
              limitations — that shaped the direction of the work.
            </p>

            <figure className="blog-image">
              <img src="/projects/spatial-computing/spline_vespa.png" alt="Placeholder image" />
              <figcaption>Caption for this image — describe what the reader is looking at.</figcaption>
            </figure>

            <h2 id="how-it-works">How It Works</h2>
            <p>
              Explain the core mechanic or technical approach here. You don't need to go line-by-line
              through the code, but give enough detail that a technical reader understands the decisions
              you made and why.
            </p>
            <p>
              If there were a few different approaches you considered, mention them briefly. Explaining
              what you <em>didn't</em> do and why is often just as interesting as what you did.
            </p>

            <div className="blog-image-row">
              <figure className="blog-image">
                <img src="/projects/google-form-autofill/main-code.png" alt="Placeholder A" />
                <figcaption>Left image caption.</figcaption>
              </figure>
              <figure className="blog-image">
                <img src="/projects/google-form-autofill/autofilled-doc.png" alt="Placeholder B" />
                <figcaption>Right image caption.</figcaption>
              </figure>
            </div>

            <h2 id="challenges">Challenges</h2>
            <p>
              What went wrong, or harder than expected? This section often makes a project writeup
              memorable — be honest about the rough edges. It shows you understand the work deeply,
              not just the polished end result.
            </p>

            <figure className="blog-image">
              <img src="/projects/google-form-autofill/successful-email.png" alt="Placeholder image" />
              <figcaption>Caption describing this screenshot or diagram.</figcaption>
            </figure>

            <h2 id="results">Results</h2>
            <p>
              What did you end up with? Quantify if you can — time saved, error rate reduced, people
              who used it. If you can't quantify it, describe the outcome qualitatively.
            </p>
            <p>
              What would you do differently with more time? What did you learn that you didn't expect
              to? This kind of reflection is what separates a portfolio piece from just a code dump.
            </p>

            <hr className="blog-divider" />

            <div className="blog-footer">
              <a className="back-link" href="/projects">← Back to projects</a>
            </div>

          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
