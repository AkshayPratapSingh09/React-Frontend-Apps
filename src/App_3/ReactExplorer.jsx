import React, { useState } from 'react'
import styles from "./folder.module.css";
import explorer from './data';
import Folder from './Folder';

const ReactExplorer = () => {

    const [explorerData, setExplorerData] = useState(explorer);
    console.log(explorerData);
    
  return (
    <div className={styles.main}>
      <Folder explorer={explorerData}/>
    </div>
  )
}

export default ReactExplorer