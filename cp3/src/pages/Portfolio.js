import styles from './Portfolio.module.css'

const Portfolio = () => {
  return (
      <>
          <h1 className={styles.portfolio}>J's Portfolio</h1>
          <h2> Mac Wallpapers </h2>
          <div className={styles.showcase}>
            <img src={require("./images/Baymax_Scene.png")}/>
            <img src={require("./images/Magical_Forest.png")}/>
            <img src={require("./images/Vanilla_Twilight_Angel.png")}/>
            <img src={require("./images/Wizard_In_Another_World.png")}/>
          </div>
          <h2>Phone Wallpapers</h2>
          <div className={styles.showcase}>
            <img src={require("./images/Wilbur_Wallpaper.png")}/>
            <img src={require("./images/Origins_Wallpapers_1.png")}/>
            <img src={require("./images/Fundy_Wallpaper.jpeg")}/>
            <img src={require("./images/Someday.png")}/>
          </div>
          <h2>Other Works</h2>
          <div className={styles.showcase}>
            <img src={require("./images/Tartarus_Club.png")}/>
            <img src={require("./images/Wilbur.png")}/>
            <img src={require("./images/Charlie.png")}/>
            <img src={require("./images/Sea_Shanty_iPad_Size.png")}/>
          </div>
          <a className= {styles.github} href="https://github.com/julianacsmith/ReactCreativeProject">Github</a>
      </>
  );
};

export default Portfolio;