import { Fragment } from "react";
import styles2 from "./Skills.module.css";
const Skills = () => {
  return (
    <Fragment>
      <div className={styles2.skillsDivLeft}>
        <h1 className={styles2.displayText}>Skills</h1>
        
        <img src="/images/reactLogo.png"/> 
        
        <img src="/images/javascriptIcon.png"/>
      </div>

      <div className={styles2.skillsDivRight}>
        <h1 className={styles2.displayText}>Familiar With</h1>
        <img src="/images/firebaseIcon.png"/>
        <img src="/images/typescriptIcon.png"/>
        <img src="/images/nextLogo.png"/>
      </div>
    </Fragment>
  );
};

export default Skills;
