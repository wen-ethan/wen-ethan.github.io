import Background from '../components/Background'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Ethan Wen</h1>
            <p className="subtitle is-5 mt-4">
              Engineering student interested in embedded systems,
              hardware–software interfaces, and applied research.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
