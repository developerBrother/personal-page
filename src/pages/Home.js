import styles from "./Pages.module.css";
import placeHolderImg from '../images/team-placeholder.png';

const Home = () => {
  return (
    <div className={styles.content}>
      <span>
        <img className={styles.homeimg} src={placeHolderImg}></img>
      </span>
      <span className={styles.text}>
        <h1>Welcome to my page!</h1>
        <p>I am a recent graduate from CSUN with a Bachelor's in Computer Science. I am currently interested in web development using React JS. In fact this very page was created using React!
         
        </p>
        <p>
        On this site you will also find a list of my skills, links to my other projects and how to contact me.
        
        
        </p>
        <h2>Enjoy!</h2>
      </span>
    </div>
  );
};

export default Home;
