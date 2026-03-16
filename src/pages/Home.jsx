import Background from '../components/Background'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Background video />
      <Nav />
      <section className="hero">
        <div className="hero-body">
          <h1 className="hero-title">Ethan Wen</h1>
          <p className="hero-subtitle">
            Engineering student interested in embedded systems, hardware–software interfaces, and applied research.
          </p>
        </div>
      </section>
    </>
  )
}
