import Background from '../components/Background'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/about.css'

export default function About() {
  return (
    <>
      <Background />
      <Nav />
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2">About Me</h1>
            <p className="subtitle is-5 mt-2">
              A little something about who I am.
            </p>
          </div>
        </div>
      </section>

      <section className="about-shell">
        <div className="about-grid">
          <div className="about-media">
            <img src="/headshot.jpg" alt="Ethan Wen headshot" />
          </div>

          <div className="about-content">
            <p>
              I'm Ethan, a Princeton University undergraduate pursuing a B.S.E. in Electrical and Computer Engineering, with my focus being on hardware. Specifically, I’m interested in digital design, embedded systems, and the path from RTL to silicon that makes modern chips possible.
            </p>
            <p>
              I'm especially drawn to the problems that live at the boundary between hardware and software: how a processor gets designed, how firmware talks to bare metal, how modern chips like Apple's M-series goes from architecture to physical implementation. I build projects that keep me close to that boundary, currently working with FPGAs and microcontrollers to sharpen my Verilog and embedded C fundamentals.
            </p>
            <p>
              Outside of engineering, I care about who technology is built for and who gets left out. That shapes how I think about the problems worth solving, not just thinking about how to build well, but why it matters.
            </p>

            <div className="about-links">
              <a href="https://github.com/wen-ethan/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="icon">
                  <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/wen-ethan/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="icon">
                  <path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fillRule="evenodd" />
                </svg>
              </a>
              <a href="mailto:wen.ethann@gmail.com" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="icon">
                  <path d="M8.88,8.827c.074,.042,.166,.042,.24,0l7.777-4.283c-.314-1.173-1.376-2.044-2.647-2.044H3.75c-1.267,0-2.326,.865-2.643,2.033l7.773,4.293Z" /><path d="M9.845,10.14c-.264,.146-.554,.219-.844,.219s-.582-.073-.846-.22L1,6.188v6.562c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V6.2l-7.155,3.94Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
