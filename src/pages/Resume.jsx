import Background from '../components/Background'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/resume.css'

export default function Resume() {
  return (
    <>
      <Background />
      <Nav />
      <section className="hero" style={{ minHeight: 'auto' }}>
        <div className="hero-body" style={{ paddingBottom: '2rem' }}>
          <h1 className="hero-title">Resume</h1>
          <p className="hero-subtitle">Education, experience, and skills.</p>
          <a href="/Ethan_Wen_Resume.pdf" className="resume-download" target="_blank" rel="noreferrer">
            ↓ Download PDF
          </a>
        </div>
      </section>
      <div className="resume-shell">
        <div className="resume-grid">

          {/* Education */}
          <div className="resume-card">
            <h2>Education</h2>

            <div className="resume-entry">
              <strong>Princeton University</strong>
              <p className="resume-meta">B.S.E. Electrical & Computer Engineering · Expected May 2029 · GPA 3.82</p>
            </div>

            <div className="resume-entry">
              <strong>City Colleges of Chicago</strong>
              <p className="resume-meta">Associate's Degree, Early College Program · Jun 2024–Jul 2025</p>
              <ul><li>Calculus III, Linear Algebra</li></ul>
            </div>

            <div className="resume-entry">
              <strong>University of Chicago — Summer Bridge</strong>
              <p className="resume-meta">Jun 2023–Mar 2025</p>
              <ul><li>World Literature I & II; Physics of Stars</li></ul>
            </div>

            <div className="resume-entry">
              <strong>Walter Payton College Prep</strong>
              <p className="resume-meta">High School Diploma · Jun 2025</p>
              <ul>
                <li>1st in State CyberPatriots XVI</li>
                <li>2nd IEEE SSCS Arduino Contest 2024</li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div className="resume-card">
            <h2>Experience</h2>

            <div className="resume-entry">
              <strong>Project:VISION, Inc. — Digital Creators Intern (Spatial Computing)</strong>
              <p className="resume-meta">Chicago, IL · Jun–Jul 2025</p>
              <ul>
                <li>Developed spatial computing and AR portfolio pieces selected for Apple Everyone Can Code Showcase</li>
                <li>Used Spline and Reality Composer Pro to build immersive 3D experiences</li>
              </ul>
            </div>

            <div className="resume-entry">
              <strong>Hoagie Club — HoagieHelp Developer</strong>
              <p className="resume-meta">Princeton, NJ · Feb 2026–Present</p>
              <ul>
                <li>Building student resource platform with Next.js, React, TypeScript, Tailwind, and Python backend</li>
              </ul>
            </div>

            <div className="resume-entry">
              <strong>MIT Beaver Works Summer Institute — Microelectronics Program</strong>
              <p className="resume-meta">Jul–Aug 2024</p>
              <ul>
                <li>Completed 100-hour intensive embedded systems program</li>
                <li>Built capstone hardware prototype</li>
              </ul>
            </div>
          </div>

          {/* Activities */}
          <div className="resume-card">
            <h2>Activities</h2>

            <div className="resume-entry">
              <strong>Princeton University Robotics Club</strong>
              <p className="resume-meta">Princeton, NJ · Sept 2025–Present</p>
            </div>

            <div className="resume-entry">
              <strong>Cantonese Language and Culture Club — Cofounder</strong>
              <p className="resume-meta">Chicago, IL · Jul–Aug 2024</p>
            </div>
          </div>

          {/* Skills */}
          <div className="resume-card">
            <h2>Skills & Interests</h2>

            <div className="resume-entry">
              <strong>Languages</strong>
              <p className="resume-meta">English (native) · Cantonese (native) · Mandarin (professional)</p>
            </div>

            <div className="resume-entry">
              <strong>Technical</strong>
              <div className="resume-tags">
                {['Python', 'C/C++', 'Arduino/ESP32', 'HTML/CSS/JS', 'LaTeX', 'Git',
                  'Circuit Fundamentals', 'PCB Design Basics', 'Spline', 'Reality Composer'].map(s => (
                  <span key={s} className="resume-tag">{s}</span>
                ))}
              </div>
            </div>

            <div className="resume-entry">
              <strong>Interests</strong>
              <div className="resume-tags">
                {['Spatial Computing', 'Microelectronics', 'Robotics', 'East Asian Culture',
                  'Modern Chinese History', '3D Modeling & Design', 'Astrophysics'].map(s => (
                  <span key={s} className="resume-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
