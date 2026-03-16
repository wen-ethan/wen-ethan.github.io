import { Link } from 'react-router-dom'
import Background from '../components/Background'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const projects = [
  {
    slug: 'spatial-computing',
    title: 'Spatial Computing Portfolio',
    description: 'A collection of spatial computing and AR experiences built during my internship at Project:VISION.',
    image: '/projects/spatial-computing/tiger_firefighter.png',
  },
  {
    slug: 'ap-physics-c',
    title: 'AP Physics C Notes',
    description: 'An HTML/CSS notes site for AP Physics C: Electricity & Magnetism, built as a learning project.',
    image: '/projects/ap-physics-c/electrostatics.png',
    imageRight: true,
  },
  {
    slug: 'google-form-autofill',
    title: 'Google Form Autofill',
    description: 'A Google Apps Script automation that populates PDFs from form submissions and emails applicants.',
    image: '/projects/google-form-autofill/thumbnail.png',
  },
]

export default function Projects() {
  return (
    <>
      <Background />
      <Nav />
      <section className="hero" style={{ minHeight: 'auto' }}>
        <div className="hero-body" style={{ paddingBottom: '2rem' }}>
          <h1 className="hero-title">Projects</h1>
          <p className="hero-subtitle">A collection of my most notable work.</p>
        </div>
      </section>
      <div className="projects-grid">
        {projects.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className={`project-card${p.imageRight ? ' image-right' : ''}`}>
            <img className="project-image" src={p.image} alt={p.title} />
            <div className="project-content">
              <h2 className="project-title">{p.title}</h2>
              <p className="project-description">{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  )
}
