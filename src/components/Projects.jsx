import ET from "../assets/images/expenseTracker.png";
import ATM from "../assets/images/ATMProgramImg.jpg";
import GE from "../assets/images/portfolio.png";

import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.projectstitle}>Some of my Recent Projects</h2>
      <div className={styles.projectscontainer}>
        <div className={styles.projectcontainer}>
          <img
            src={ET}
            alt="expense-tracker"
            loading="lazy"
            className={styles.projectpic}
          />
          <h3 className={styles.projecttitle}>Stock Market Price Prediction</h3>
          <p className={styles.projectdetails}>
            Developed LSTM model for price prediction, utilizing MongoDB for
            efficient data management. Achieved precise predictions, showcasing
            proficiency in deep learning techniques.
          </p>
          <a href="#" target="_blank" className={styles.projectlink}>
            Check it Out
          </a>
        </div>
        <div className={styles.projectcontainer}>
          {/* project-card */}
          <img
            src={ATM}
            alt="ATM Applicaion"
            loading="lazy"
            className={styles.projectpicATM}
          />
          <h3 className={styles.projecttitle}>ATM Application Using Java</h3>
          <p className={styles.projectdetails}>
            Implemented ATM application emphasizing OOP, interfaces, classes,
            and JUnit testing. Demonstrated proficiency in Java programming and
            application development.
          </p>
          <a href="#" target="_blank" className={styles.projectlink}>
            Check it Out
          </a>
        </div>
        <div className={styles.projectcontainer}>
          <img
            src={GE}
            alt="Portfolio"
            loading="lazy"
            className={styles.projectpic}
          />
          <h3 className={styles.projecttitle}>Portfolio Website</h3>
          <p className={styles.projectdetails}>
            Created a portfolio website using React, HTML, and CSS to showcase
            my skills, projects, and experiences. Designed and implemented
            user-friendly interfaces. Utilized React components for modular and
            efficient code structure.
          </p>
          <a href="https://my-portfolio-5c3rhdopb-pandurangdahibhats-projects.vercel.app/" target="_blank" className={styles.projectlink}>
            Check it Out
          </a>
        </div>
      </div>
    </section>
  );
};
export default Projects;
