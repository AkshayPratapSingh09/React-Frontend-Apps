import React,{select, useState} from 'react';
import styles from "./Layouts.module.css"
import { Link } from 'react-router-dom';

const CSSLayouts = () => {
    const [defaultClass,setDefaultClass] = useState("grid-container");


  return (
    <div className={styles.main}>
    <div className={styles.custom}>
  <select value={defaultClass} onChange={(e) => setDefaultClass(e.target.value)}>
    <option value="default">Select car:</option>
    <option value="first">Audi</option>
    <option value="second">BMW</option>
  </select>
</div>
    <div className={styles[defaultClass]}>
        <div><Link className={styles.link} to={"/App4/firstGrid"}>First Project</Link></div>
        <div><Link className={styles.link} to={"/App4/firstGrid"}>First Project</Link></div>
        <div><Link className={styles.link} to={"/App4/firstGrid"}>First Project</Link></div>
        <div><Link className={styles.link} to={"/App4/firstGrid"}>First Project</Link></div>
        <div><Link className={styles.link} to={"/App4/firstGrid"}>First Project</Link></div>
        <div><Link className={styles.link} to={"/App4/firstGrid"}>First Project</Link></div>
        
    </div>
    </div>
  )
}

export default CSSLayouts