import soccerImg from '../images/soccerFoot.jpg';
import crossImg from '../images/sunsetCross.jpg';

import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <div>
      <h1 className={styles.displayText}>Projects</h1>
      <div className={styles.projectsAlign}>
        <a href="https://soccermanagerdemo.netlify.app">
          <h3>Soccer Manager</h3>
          <img src={soccerImg} alt="Link to Soccer Demo Site"/>
        </a>

        
        <a href="">
        <h3>Christian Wallpapers</h3>
          <img src={crossImg} alt="Link to Christian Wallpaper Site"/>
        </a>
      </div>
    </div>
  );
};

export default Projects;
