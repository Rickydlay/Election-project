import styles from "./Hero.module.css";


const Hero = () => {
  return (
    <div className={styles.hero}>
      <img src="/voting2.jpg" alt="Election Hero" />
      <h1>Transparent & Fair Elections</h1>
    </div>
  ); 
};
console.log("Hero component loaded")
export default Hero;
