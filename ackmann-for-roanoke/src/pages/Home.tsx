import './pages.css'

const headshot = new URL('../../assets/zoomed-in headshot photo.jpg', import.meta.url).href

export default function Home() {
  return (
    <div className="hero w-full flex-1 flex items-center">
      <div className="hero-inner w-full max-w-4xl mx-auto flex flex-col items-center gap-4 px-4 py-8">
        <img src={headshot} alt="Jonathan Ackmann headshot" className="headshot shadow-lg" />
        <h2 className="headline text-2xl md:text-3xl">Jonathan Ackmann for Roanoke City Council Ward 2</h2>
        <p className="slogan text-lg md:text-xl">Bringing Roanoke Together</p>
      </div>
    </div>
  )
}
