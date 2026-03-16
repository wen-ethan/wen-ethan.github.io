import { Link } from 'react-router-dom'
import Background from '../../components/Background'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import '../../styles/project-page.css'

const slides = [
  { src: '/projects/google-form-autofill/main-code.png', alt: 'Apps Script main code' },
  { src: '/projects/google-form-autofill/autofilled-doc.png', alt: 'Autofilled PDF document' },
  { src: '/projects/google-form-autofill/successful-email.png', alt: 'Successful confirmation email' },
]

const tags = ['Google Workspace', 'JavaScript', 'Google Apps Script', 'Automation']

export default function GoogleFormAutofill() {
  return (
    <>
      <Background />
      <Nav />
      <div className="project-shell">
        <Link to="/projects" className="back-link">← Back to Projects</Link>
        <div className="project-header">
          <h1>Google Form Autofill</h1>
          <div className="project-tags">
            {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
          </div>
        </div>
        <div className="project-body-card">
          <div className="project-grid">
            <Carousel slides={slides} />
            <div className="project-content-side">
              <p>
                A Google Apps Script automation built for NCHS member applications. When a Google Form is submitted,
                the script pulls the response data, populates a PDF template, and emails the completed document back
                to the applicant — all automatically.
              </p>
              <p>
                Reduced the manual processing time for each application to zero and eliminated formatting inconsistencies
                across submitted documents.
              </p>
              <div className="project-links">
                <a href="https://github.com/wen-ethan/apps-script-application-automation" className="project-link-btn" target="_blank" rel="noreferrer">
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
