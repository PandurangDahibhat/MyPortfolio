import photo from "../assets/images/Passport_Photograph.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero} id="about">
      <img
        src={photo}
        alt="Pandurang Dahibhat"
        loading="lazy"
        className="hero-img"
      />
      <div className={styles.bio}>
        <h2 className={styles.biotitle}>Pandurang Dahibat</h2>
        <h3 className={styles.biotitle}>Computer Engineer</h3>
        <text className={styles.biotitle}>Full Stack Developer</text>
      </div>
    </section>
  );
};
export default Hero;
