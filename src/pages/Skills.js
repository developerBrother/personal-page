import { Fragment } from "react";
import styles2 from "./Skills.module.css";

import firebaseLogo from '../images/firebaseIcon.png';
import reactLogo from '../images/reactLogo.png';
import javascriptLogo from '../images/javascriptIcon.png';
import nextLogo from '../images/nextLogo.png';
import typescriptLogo from '../images/typescriptIcon.png';

const Skills = () => {
  return (
    <Fragment>
      <div className={styles2.skillsDivLeft}>
        <h1 className={styles2.displayText}>Skills</h1>
        
        <img src={reactLogo} alt="React Logo"/>
        
        <img src={javascriptLogo} alt="Javascript Logo"/>
      </div>

      <div className={styles2.skillsDivRight}>
        <h1 className={styles2.displayText}>Familiar With</h1>
        <img src={firebaseLogo} alt="Firebase Logo"/>
        <img src={typescriptLogo} alt="Typescript Logo"/>
        <img src={nextLogo} alt="NextJS Logo"/>
      </div>
    </Fragment>
  );
};

export default Skills;
