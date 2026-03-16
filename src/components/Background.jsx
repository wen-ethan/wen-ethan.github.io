export default function Background({ video = false }) {
  if (video) {
    return (
      <>
        <video className="bg" autoPlay muted loop playsInline>
          <source src="/backgrounds/background-video.mp4" type="video/mp4" />
        </video>
        <div className="bg-overlay" />
      </>
    )
  }
  return <img className="bg" src="/backgrounds/background-static.png" alt="" />
}
