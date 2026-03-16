import { Link } from 'react-router-dom'
import Background from '../components/Background'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const projects = [
  {
    slug: 'spatial-computing',
    title: 'Spatial Computing Portfolio',
    description: 'Interactive AR and spatial computing projects built during my Digital Creators Internship, exploring 3D interaction, animation, and immersive storytelling for platforms like Apple Vision Pro.',
    image: '/projects/spatial-computing/tiger_firefighter.png',
  },
  {
    slug: 'ap-physics-c',
    title: 'AP Physics C Notes',
    description: "Built a clean notes website for AP Physics C: E&M while prepping for the AP exam and learning HTML/CSS along the way.",
    image: '/projects/ap-physics-c/electrostatics.png',
    imageRight: true,
  },
  {
    slug: 'google-form-autofill',
    title: 'Google Form Autofill',
    description: 'Created a Google Apps Script workflow that turns form responses into auto-filled, ready-to-submit PDFs.',
    image: '/projects/google-form-autofill/thumbnail.png',
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

      <Footer />
    </>
  )
}
