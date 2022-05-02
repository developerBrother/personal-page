import soccerImg from '../images/soccerFoot.jpg';
import crossImg from '../images/sunsetCross.jpg';
import githubImg from '../images/GitHub_Logo.png';
import gitlabImg from '../images/gitlabLogo.png';

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

        
        <a href="https://github.com/developerBrother/Christian_wallpapers">
        <h3>Christian Wallpapers</h3>
          <img src={crossImg} alt="Link to Christian Wallpaper Site"/>
        </a>
        
        <a href="https://github.com/developerBrother">
        <h3>Github</h3>
          <img src={githubImg} alt="Link to Github"/>
        </a>
        
        <a href="https://gitlab.com/BCarmel">
        <h3>Gitlab</h3>
          <img src={gitlabImg} alt="Link to Gitlab"/>
        </a>
      </div>
    </div>
  );
};

export default Projects;
