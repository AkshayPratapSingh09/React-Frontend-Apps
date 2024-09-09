import React, { useState } from 'react'
import styles from "./folder.module.css";

const Folder = ({explorer,id}) => {
    const[hidden,setHidden] = useState(false);
    const[isAdding,setIsAdding] = useState(false);
    console.log(explorer);
    
  return (
    <div style={{marginTop:5}}>
<div className={styles.label}>
    <span>
        {explorer.isFolder? `📁 ${explorer.name} ` : `📄 ${explorer.name}`}
        {explorer.isFolder && 
        <span
        className={styles.collapse}
        onClick={()=>setHidden(prev=>!prev)}
        >{hidden?"▲":"▼"}
        </span>}
{explorer.isFolder && <span className={styles.addFolder}
onClick={()=>setIsAdding(prev=>!prev)}
><img width="15" height="15" src="https://img.icons8.com/ios/50/add-folder--v1.png" alt="add-folder--v1"/></span>
        }
        
    </span>
</div>
<div>
    <div style={{marginLeft:10}}>
        <input id={id} placeholder='Enter Folder Name'/>
    {!hidden && explorer?.items.length > 0 &&  explorer.items.map((exp)=>{
        return(
            <Folder explorer={exp} {...exp}/>
        )
    })}
    </div>
</div>

    </div>
  )
}

export default Folder