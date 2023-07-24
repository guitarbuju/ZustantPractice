import styles from "./pages.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="https://i.pinimg.com/originals/50/13/31/501331e2689b0722c2df8c1e5ad198f1.png" />
      </div>
      
      <div className={styles.wrapper}>
        <h1>!!!!!Get in Check my JWT stored with Zustand</h1>
        <p>This is a REACt / EXPRESS fullstack project for practicing Zustand,Axios  Typescript, React-Router and other stuff</p>
        <Link className="btn btn-success" to='login'>GET IN!!</Link>
      
      </div>
    </div>
  );
};

export default HomePage;
