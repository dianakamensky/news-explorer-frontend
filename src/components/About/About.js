import "./About.css";
import Image from "../../images/profile.jpg";

function About(props) {
  return (
    <section className="about">
      <img className="about__image" src={Image} alt="project author"></img>
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__paragraph">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
