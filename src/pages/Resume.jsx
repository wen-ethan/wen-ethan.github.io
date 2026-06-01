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
                  <span className="resume-meta">B.S.E. Electrical & Computer Engineering · Expected May 2029</span>
                  <ul><li>Cumulative GPA: 3.82</li></ul>
                </div>
                <div className="resume-entry">
                  <strong>City Colleges of Chicago</strong> <span className="resume-meta">Chicago, IL</span><br />
                  <span className="resume-meta">Associate's Degree in General Studies, Early College Program · Jun 2024 – Jul 2025</span>
                  <ul><li>Relevant Coursework: Calculus & Analytic Geometry III; Linear Algebra</li></ul>
                </div>
                <div className="resume-entry">
                  <strong>Walter Payton College Preparatory High School</strong> <span className="resume-meta">Chicago, IL</span><br />
                  <span className="resume-meta">High School Diploma · Jun 2025</span>
                  <ul><li>Awards: 1st in State in CyberPatriots XVI Semifinal Round; 2nd in IEEE SSCS Arduino Contest 2024</li></ul>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="project-card resume-card">
              <div className="project-content">
                <h3 className="project-title">Experience</h3>
                <div className="resume-entry">
                  <strong>Hoagie Club</strong> <span className="resume-meta">HoagieHelp Developer · Princeton, NJ</span><br />
                  <span className="resume-meta">Feb 2026 - Present</span>
                  <ul>
                    <li>Contributing to full-stack development of HoagieHelp, an academic support platform featuring Q&A forums and study group coordination.</li>
                    <li>Building frontend components in Next.js, React, TypeScript, and Tailwind, and contributing to backend services in Python.</li>
                  </ul>
                </div>

                <div className="resume-entry">
                  <strong>Project:VISION, Inc.</strong> <span className="resume-meta">Digital Creators Intern (Spatial Computing) · Chicago, IL</span><br />
                  <span className="resume-meta">Jun 2025 - Jul 2025</span>
                  <ul>
                    <li>Designed AR-ready 3D environments and spatial computing prototypes using Spline and Reality Composer for deployment on Apple Vision Pro; selected to present work at Apple's Everyone Can Code Showcase. </li>
                    <li>Built <em>Weight of Waste</em>, an AR experience in Reality Composer that confronts users with the scale of personal plastic waste by flooding their environment with an overwhelming cascade of water bottles.</li>
                  </ul>
                </div>

                <div className="resume-entry">
                  <strong>MIT Beaver Works Summer Institute</strong> <span className="resume-meta">Microelectronics Program Participant</span><br />
                  <span className="resume-meta">Jul 2024 - Aug 2024</span>
                  <ul>
                    <li>Collaborated with a 4-person team to build an AI-powered home security system with 180° pan/tilt, face and fingerprint identification, and automated threat-level notifications; presented to a 50-student national cohort.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className="project-card resume-card">
              <div className="project-content">
                <h3 className="project-title">Activities</h3>

                <div className="resume-entry">
                  <strong>Princeton University Robotics Club</strong> <span className="resume-meta">Member · Princeton, NJ</span><br />
                  <span className="resume-meta">Sept 2025 - Present</span>
                  <ul><li>Engaging in hands-on projects involving firmware, hardware configuration, and debugging, including vintage iPod refurbishment. </li></ul>
                </div>
              </div>
            </div>

            {/* Honors */}
            <div className="project-card resume-card">
              <div className="project-content">
                <h3 className="project-title">Honors</h3>

                <div className="resume-entry">
                  <strong>Chicago Engineers' Foundation</strong> <span className="resume-meta">Engineering Futures Award · $5,000</span><br />
                  <span className="resume-meta">June 2026</span>
                </div>
              </div>
            </div>

            {/* Skills & Interests */}
            <div className="project-card resume-card">
              <div className="project-content">
                <h3 className="project-title">Skills & Interests</h3>
                <strong>Language Skills</strong>
                <div className="resume-skills mb-3">
                  {['English (native)', 'Cantonese (native)', 'Mandarin (professional proficiency)'].map(s => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <strong>Technical Skills</strong>
                <div className="resume-skills mb-3">
                  {['Python', 'C/C++', 'Arduino / ESP32', 'HTML / CSS / JS', 'LaTeX', 'Git', 'Circuit Fundamentals', 'PCB Design Basics', 'Spline', 'Reality Composer', 'Verilog', 'STM32/STM32CubeIDE'].map(s => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <strong>Interests</strong>
                <div className="resume-skills">
                  {['Spatial Computing', 'Microelectronics', 'Robotics', 'East Asian Culture', 'Modern Chinese History', '3D Modeling & Design', 'Astrophysics'].map(s => (
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
