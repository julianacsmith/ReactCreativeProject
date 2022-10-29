import styles from './About.module.css'

const About = () => {
  return (
      <>
        <div className = {styles.about}>
        <h1>Hey There!</h1>
          <div className = {styles.info}>
            <p>I'm J is Typing, but feel free to just call me J! I'm an artist who has been posting online
                for 2 years and have been streaming for about 1 year. I absolutely love drawing characters
                and wallpapers where I can just spend time designing and having fun!<br/><br/>Make sure to check
                out my portfolio or reach out to me on any of my socials down below! <br/><br/>Until next time! 
                make sure to get some water, get some sleep, and take care of yourself!</p>
            <img src={require("./images/Official_Avatar.png")}/>
          </div>
        </div>
        <div className={styles.socials}>
            <a href="https://www.instagram.com/j_is_typing/?hl=en"><img src={require("./images/instagram.png")}/></a>
            <a href="https://twitter.com/J_is_Typing"><img src={require("./images/twitter.png")}/></a>
            <a href="https://www.tiktok.com/@j_is_typing?lang=en"><img src={require("./images/tiktok.png")}/></a>
          </div>
        <a className={styles.github} href="https://github.com/julianacsmith/ReactCreativeProject">Github</a>
      </>
  );
  
};

export default About;