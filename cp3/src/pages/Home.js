import homeStyles from './Home.module.css'

const Home = () => {
  return (
    <>
      <div className={homeStyles.page}>
        <div className = {homeStyles.top}>
          <h1>Home</h1>
        </div>
        <div className={homeStyles.socials}>
          <a href="https://www.instagram.com/j_is_typing/?hl=en"><img src={require("./images/instagram.png")}/></a>
          <a href="https://twitter.com/J_is_Typing"><img src={require("./images/twitter.png")}/></a>
          <a href="https://www.tiktok.com/@j_is_typing?lang=en"><img src={require("./images/tiktok.png")}/></a>
        </div>
        <a className= {homeStyles.github} href="https://github.com/julianacsmith/ReactCreativeProject">Github</a>
      </div>
    </>
  );
};

export default Home;