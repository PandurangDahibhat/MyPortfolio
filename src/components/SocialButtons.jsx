import insta from "../assets/icons/icons8-instagram.gif";
import ld from "../assets/icons/icons8-linkedin-circled.gif";
import git from "../assets/icons/icons8-github.gif";
import twitter from "../assets/icons/icons8-twitter-circled.gif";

import Styles from "./SocialButtons.module.css";

const SocialButtons = () => {
  return (
    <div className={Styles.socials}>
      <a href="https://twitter.com/PandurangDahib3" target="_blank">
        <img
          src={twitter}
          alt="Twitter"
          loading="lazy"
          className={Styles.socicon}
        />
      </a>
      <a href="https://www.instagram.com/leaf_du_colour/" target="_blank">
        <img
          src={insta}
          alt="Instagram"
          loading="lazy"
          className={Styles.socicon}
        />
      </a>
      <a href="https://www.linkedin.com/in/pandurang-dahibhat/" target="_blank">
        <img
          src={ld}
          alt="Linkedin"
          loading="lazy"
          className={Styles.socicon}
        />
      </a>
      <a href="https://github.com/PandurangDahibhat" target="_blank">
        <img src={git} alt="Github" className={Styles.socicon} />
      </a>
    </div>
  );
};
export default SocialButtons;
