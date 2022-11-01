import Resume from "../Components/resume";
import css from "../Styles/about.module.css";
const About = () => {
  return (
    <div className={css.about}>
      <h2>Hello,</h2>
      <h1>I am Arafatul Islam</h1>
      <p>I am very glad that you are here and exploring my portfolio.</p>
      <p>
        I am a Front-end web developer, currently pursuing my bachelor's of
        Science in Computer Science & Engineering in International Islamic
        University Chittagong.
        <br />I love to create and build things. I love to solve complex
        problems and giving simple solutions.
      </p>
      <p></p>
      <p>
        Besides development I often try to solve online judge problems on
        various platform.
      </p>
      <p>You can know a bit more by downloading my resume. </p>

      <Resume />
    </div>
  );
};

export default About;
