import Header from "../Header/Header";
import "./Home.css"

const Home = () => {
  return (
    <section>
      <Header/>
      <section className="home-body">
        <section  className="home-blurb">
          <p className="home-greeting">Hi there.</p>
          <p className="home-name">I am Melanie,</p>
          <p className="home-profession">a Software Developer by day</p>
          <p className="home-hobby">to fund my snacking addiction.
          </p>
        </section>
          {/* <iframe src="https://giphy.com/embed/AuYloy0TMztiPFVdmH" className="gif" allowFullScreen></iframe> */}
          <p className="home-picture">PICTURE</p>
      </section> 
    </section>
  )
}

export default Home;