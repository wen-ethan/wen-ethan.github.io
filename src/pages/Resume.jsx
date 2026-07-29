import Background from '../components/Background'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/resume.css'

export default function Resume() {
  return (
    <div className="resume-page">
      <Background />
      <Nav />
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2">Resume</h1>
            <p className="subtitle is-5 mt-2">
              Education, experience, and skills.
            </p>
            <div className="resume-actions mt-4">
              <a href="/Ethan_Wen_Resume.pdf" className="resume-download" download>↓ Download PDF</a>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section page-section">
        <div className="container">
          <div className="projects-grid">

            {/* Education */}
            <div className="project-card resume-card">
              <div className="project-content">
                <h3 className="project-title">Education</h3>

                <div className="resume-entry">
                  <strong>Princeton University</strong> <span className="resume-meta">Princeton, NJ</span><br />
                  <span className="resume-meta">B.S.E. in Electrical & Computer Engineering · Expected May 2029</span>
                  <ul>
                    <li>Cumulative GPA: 3.82</li>
                    <li>Relevant Coursework: Contemporary Logic Design (Verilog); Introduction to Programming Systems (C) - Fall 2026</li>
                  </ul>
                </div>
                <div className="resume-entry">
                  <strong>City Colleges of Chicago</strong> <span className="resume-meta">Chicago, IL</span><br />
                  <span className="resume-meta">Associate's Degree in General Studies, Early College Program · Jun 2024 – Jul 2025</span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="project-card resume-card">
              <div className="project-content">
                <h3 className="project-title">Projects</h3>

                <div className="resume-entry">
                  <strong>EchoAssist</strong> <span className="resume-meta">Swift, SwiftUI, CoreML, Apple Intelligence Foundation Models</span>
                  <ul>
                    <li>Live speaker-labeled captions generated fully on-device by two streaming CoreML models (Parakeet ASR, Sortformer diarization) synced on a shared audio clock, running ~0.6s behind real time.</li>
                    <li>On-device transcript summarization via Apple Intelligence Foundation Models and translation into six languages through Apple's Translation framework.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="project-card resume-card">
              <div className="project-content">
                <h3 className="project-title">Experience</h3>
                <div className="resume-entry">
                  <strong>Everyone Can Code Chicago</strong> <span className="resume-meta">iOS App Dev & Machine Learning Program · Chicago, IL</span><br />
                  <span className="resume-meta">Jun 2026 - Jul 2026</span>
                  <ul>
                    <li>Built EchoAssist over a six-week paid cohort program run in partnership between Apple and the City of Chicago.</li>
                    <li>Advanced to the second round of the program showcase competition, top 12 of 56 teams, judged by Apple engineers.</li>
                  </ul>
                </div>

                <div className="resume-entry">
                  <strong>Relay</strong> <span className="resume-meta">Software Engineer</span><br />
                  <span className="resume-meta">Jun 2026 - Present</span>
                  <ul>
                    <li>Shipped the friendship, concerts, and messaging systems for a five-person cross-platform Flutter music-sharing app.</li>
                    <li>Authored engineering design documents covering Firestore data modeling, transaction safety, security rules, and abuse and scale analysis.</li>
                  </ul>
                </div>

                <div className="resume-entry">
                  <strong>Hoagie Club</strong> <span className="resume-meta">HoagieHelp Developer · Princeton, NJ</span><br />
                  <span className="resume-meta">Feb 2026 - Present</span>
                  <ul>
                    <li>Building frontend components in Next.js, React, TypeScript, and Tailwind for a student academic support platform, with contributions to Python backend services.</li>
                  </ul>
                </div>

                <div className="resume-entry">
                  <strong>Project:VISION, Inc.</strong> <span className="resume-meta">Digital Creators Intern (Spatial Computing) · Chicago, IL</span><br />
                  <span className="resume-meta">Jun 2025 - Jul 2025</span>
                  <ul>
                    <li>Built AR prototypes in Spline and Reality Composer for Apple Vision Pro; selected to present at Apple's Everyone Can Code Showcase.</li>
                  </ul>
                </div>

                <div className="resume-entry">
                  <strong>MIT Beaver Works Summer Institute</strong> <span className="resume-meta">Microelectronics Program Participant</span><br />
                  <span className="resume-meta">Jul 2024 - Aug 2024</span>
                  <ul>
                    <li>Built an AI-powered home security system with a four-person team: 180° pan/tilt, face and fingerprint identification, and automated threat-level notifications; presented to a 50-student national cohort.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className="project-card resume-card">
              <div className="project-content">
                <h3 className="project-title">Activities</h3>

                <div className="resume-entry">
                  <strong>Princeton University Robotics Club</strong> <span className="resume-meta">Tinker Member · Princeton, NJ</span><br />
                  <span className="resume-meta">Sept 2025 - Present</span>
                  <ul><li>Hands-on firmware, hardware bring-up, and debugging projects, including vintage iPod refurbishment.</li></ul>
                </div>
              </div>
            </div>

            {/* Honors */}
            <div className="project-card resume-card">
              <div className="project-content">
                <h3 className="project-title">Honors</h3>

                <div className="resume-entry">
                  <strong>Chicago Engineers' Foundation</strong> <span className="resume-meta">Engineering Futures Award · $5,000 merit award</span><br />
                  <span className="resume-meta">2026</span>
                </div>

                <div className="resume-entry">
                  <strong>IEEE SSCS Arduino Contest</strong> <span className="resume-meta">2nd Place</span><br />
                  <span className="resume-meta">2024</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="project-card resume-card">
              <div className="project-content">
                <h3 className="project-title">Skills</h3>
                <strong>Hardware & Digital Design</strong>
                <div className="resume-skills mb-3">
                  {['Verilog', 'Digital Logic Design', 'Arduino / ESP32', 'Circuit Fundamentals'].map(s => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <strong>Programming</strong>
                <div className="resume-skills mb-3">
                  {['C++', 'Python', 'Swift', 'Dart', 'TypeScript / JavaScript'].map(s => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <strong>Frameworks & Tools</strong>
                <div className="resume-skills mb-3">
                  {['SwiftUI', 'CoreML', 'Flutter', 'Firebase / Firestore', 'Next.js / React', 'Git', 'Xcode', 'LaTeX'].map(s => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <strong>Spoken</strong>
                <div className="resume-skills">
                  {['English (native)', 'Cantonese (native)', 'Mandarin (professional proficiency)'].map(s => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
