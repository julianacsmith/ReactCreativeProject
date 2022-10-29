import styles from './About.module.css'

const About = () => {
  return (
      <>
        <div className = {styles.about}>
        <h1>Hey There!</h1>
          <div className = {styles.info}>
            <p></p>
            <img src={require("./images/Official_Avatar.png")}/>
          </div>
        </div>
        <a className={styles.github} href="https://github.com/julianacsmith/ReactCreativeProject">Github</a>
      </>
  );
  
};

export default About;