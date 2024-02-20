import React from "react";
import htmlimage from "../assets/icons/icons8-html-5.svg";
import cssimage from "../assets/icons/icons8-css3.svg";
import btrapimage from "../assets/icons/icons8-bootstrap.svg";
import gitimage from "../assets/icons/icons8-git.svg";
import reactimage from "../assets/icons/icons8-react-native.svg";
import jsimage from "../assets/icons/icons8-javascript.svg";
import java from "../assets/icons/java_icons.png";
import python from "../assets/icons/python_icons.jpg";
import sql from "../assets/icons/sql_icons.png";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills} id="skills">
      <h2 className={styles.skillheader}>My Top Skills</h2>

      <div className={styles.skillswrapper}>
        <div className="first-set animate__animated animate__pulse">
          <img
            src={java}
            alt="Java"
            loading="lazy"
            className={`${styles.icon} skillicon`}
            title="Java"
          />

          <img
            src={python}
            alt="Python"
            loading="lazy"
            className={`${styles.icon} skillicon`}
            title="Python"
          />
          <img
            src={sql}
            alt="SQL"
            loading="lazy"
            className={`${styles.icon} skillicon`}
            title="SQL"
          />
        </div>

        <div className={styles.skillswrapper}>
          <div className="first-set animate__animated animate__pulse">
            <img
              src={htmlimage}
              alt="HTML"
              loading="lazy"
              className={`${styles.icon} skillicon`}
              title="HTML"
            />
            <img
              src={cssimage}
              alt="CSS"
              loading="lazy"
              className={`${styles.icon} skillicon`}
              title="CSS"
            />
            <img
              src={jsimage}
              alt="JavaScript"
              loading="lazy"
              className={`${styles.icon} skillicon`}
              title="JavaScript"
            />
          </div>

          <div className="second-set animate__animated animate__pulse">
            <img
              src={btrapimage}
              alt="Bootstrap"
              loading="lazy"
              className={`${styles.icon} skillicon`}
              title="Bootstrap"
            />
            <img
              src={reactimage}
              alt="React"
              loading="lazy"
              className={`${styles.icon} skillicon`}
              title="React"
            />
            <img
              src={gitimage}
              alt="Git"
              loading="lazy"
              className={`${styles.icon} skillicon`}
              title="Git"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
