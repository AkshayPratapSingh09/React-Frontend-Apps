import React from 'react'
import styles from "./folder.module.css";

const Folder = ({explorer}) => {
    console.log(explorer);
    
  return (
    <div style={{marginTop:5}}>
<div>
    <span>📁 {explorer.name}</span>
</div>
<div>
    {explorer.items.map((exp)=>{
        return(
            <span>{exp.name}</span>
        )
    })}
</div>

    </div>
  )
}

export default Folder