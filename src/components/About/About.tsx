import "./About.css";
import Header from "../Header/Header";
import { GrNote, GrGithub, GrLinkedin } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import melPicture from "../../assets/aboutMel.jpg";

// enum ImageLoadingState {
//   Inital,
//   Loading,
//   Complete,
//   Error
// }

const About = () => {

 return (
   <section>
     <Header/>
     <img src={melPicture} alt="Profile picture of Melanie"/>
     <p className="about-title">About Melanie</p>
     <p>Experienced Software Developer focused on object-oriented programming, developer empathy, and accessibility for all users. Proficient with cutting-edge development tools and procedures, design, installation, and testing software systems. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
    </p>
    <section>
      <section>
        <GrNote />
        <label> Resume </label>
      </section>
      <section>
        <GrGithub />
        <label>GitHub</label>
      </section>
      <section>
        <GrLinkedin />
        <label>LinkedIn</label>
      </section>
      <section>
        <AiOutlineMail />
        <label>Email</label>
      </section>
    </section>
   </section>
 )
}

export default About;