import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <div>
      <h1 className={styles.displayText}>Projects</h1>
      <div className={styles.projectsAlign}>
        <a href="">
          <h3>Soccer Manager</h3>
          <img src="/images/soccerFoot.jpg"></img>
        </a>

        
        <a href="">
        <h3>Christian Wallpapers</h3>
          <img src="/images/sunsetCross.jpg"></img>
        </a>
      </div>
    </div>
  );
};

export default Projects;
