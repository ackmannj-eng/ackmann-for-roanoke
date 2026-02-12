const cityHall = new URL('../../assets/city hall photo.jpg', import.meta.url).href

export default function About() {
  return (
    <section className="about max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl mb-4 ">About</h2>
      <img src={cityHall} alt="Roanoke City Hall" className="about-photo" />
      <p className="about-text">
        I have lived in Roanoke for 8 years. I first lived in the Boulder Ridge Apartments and then bought a house in the Meadows of Roanoke in 2021. I am an active member in the community - serving on the Roanoke Parks Board and regularly attending City Council and Keep Roanoke Beautiful meetings. I am passionate about making Roanoke the best place to live. While not at my job as a software engineer at Fidelity Investments, you can often find me at Cannon Park with my family or at the Roanoke Rec Center playing basketball.
      </p>
    </section>
  )
}
