import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <h1>Pandurang Dahibhat</h1>
      <ul className={styles.navigation}>
        <li className={styles.list}>
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <button className="burger-menu" id="burger-menu">
        <ion-icon className="bars" name="menu-outline"></ion-icon>
      </button>
    </nav>
  );
};
export default Navbar;
