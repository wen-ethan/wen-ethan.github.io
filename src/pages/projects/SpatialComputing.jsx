import { Link } from 'react-router-dom'
import Background from '../../components/Background'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import '../../styles/project-page.css'

const slides = [
  { src: '/projects/spatial-computing/tiger_firefighter.png', alt: 'Tiger firefighter AR scene' },
  { src: '/projects/spatial-computing/potted_plant.png', alt: 'Potted plant AR model' },
  { src: '/projects/spatial-computing/spline_vespa.png', alt: 'Spline Vespa 3D model' },
  { type: 'video', src: '/projects/spatial-computing/spline_animation.mov', poster: '/projects/spatial-computing/spline_animation_thumbnail.png', mimeType: 'video/quicktime' },
  { type: 'video', src: '/projects/spatial-computing/in-progress_screen_recording.mp4', poster: '/projects/spatial-computing/in-progress_screen_recording_thumbnail.png' },
  { type: 'video', src: '/projects/spatial-computing/final_project_video.mp4', poster: '/projects/spatial-computing/final_project_video_thumbnail.jpg' },
]

const tags = ['Spatial Computing', 'Augmented Reality', '3D Design', 'Spline', 'Reality Composer']

export default function SpatialComputing() {
  return (
    <>
      <Background />
      <Nav />
      <div className="project-shell">
        <Link to="/projects" className="back-link">← Back to Projects</Link>
        <div className="project-header">
          <h1>Spatial Computing Portfolio</h1>
          <div className="project-tags">
            {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
          </div>
        </div>
        <div className="project-body-card">
          <div className="project-grid">
            <Carousel slides={slides} />
            <div className="project-content-side">
              <p>
                A collection of spatial computing work created during my Digital Creators Internship at Project:VISION, Inc.
                The portfolio spans augmented reality scenes, 3D-modeled objects, and interactive spatial experiences.
              </p>
              <p>
                Built using Spline for 3D design and animation, and Apple's Reality Composer Pro for AR deployment on-device.
                One project was selected for the Apple Everyone Can Code Showcase 2025.
              </p>
              <div className="project-links">
                <a href="https://github.com/wen-ethan/spatial-computing" className="project-link-btn" target="_blank" rel="noreferrer">
                  GitHub Repo
                </a>
                <a href="https://www.apple.com/education/everyone-can-code/" className="project-link-btn" target="_blank" rel="noreferrer">
                  Apple EOC Showcase 2025
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
