import Header from "../Header/Header";
import "./Home.css"

const Home = () => {
  return (
    <section>
      <Header/>
      <section className="home-body">
        <p>Hi there,<br/>
        I am a Software Developer by day<br/>
        to fund my snacking addiction
        </p>
        <p className="home-picture">PICTURE</p>
      </section> 
    </section>
  )
}

export default Home;