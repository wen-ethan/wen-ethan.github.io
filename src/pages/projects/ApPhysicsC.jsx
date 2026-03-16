import { Link } from 'react-router-dom'
import Background from '../../components/Background'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import '../../styles/project-page.css'

const slides = [
  { src: '/projects/ap-physics-c/e-m.png', alt: 'E&M notes overview' },
  { src: '/projects/ap-physics-c/electrostatics.png', alt: 'Electrostatics section' },
  { src: '/projects/ap-physics-c/diaelectric.png', alt: 'Dielectrics section' },
  { src: '/projects/ap-physics-c/practice resources.png', alt: 'Practice resources' },
]

const tags = ['HTML & CSS', 'Physics', 'new.css']

export default function ApPhysicsC() {
  return (
    <>
      <Background />
      <Nav />
      <div className="project-shell">
        <Link to="/projects" className="back-link">← Back to Projects</Link>
        <div className="project-header">
          <h1>AP Physics C Notes</h1>
          <div className="project-tags">
            {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
          </div>
        </div>
        <div className="project-body-card">
          <div className="project-grid">
            <Carousel slides={slides} />
            <div className="project-content-side">
              <p>
                A notes website for AP Physics C: Electricity & Magnetism, built from scratch as an HTML/CSS learning project.
                Covers electrostatics, circuits, magnetism, and electromagnetic induction with LaTeX-rendered equations.
              </p>
              <p>
                Uses the <em>new.css</em> classless framework for clean default styles, with LaTeXMathML.js for inline math rendering.
                Built iteratively as I studied the material — design and content developed together.
              </p>
              <div className="project-links">
                <a href="https://ap-physics-notes.wen-ethan.net/mechanics.html" className="project-link-btn" target="_blank" rel="noreferrer">
                  Live Site
                </a>
                <a href="https://github.com/wen-ethan/ap-physics-notes" className="project-link-btn" target="_blank" rel="noreferrer">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
