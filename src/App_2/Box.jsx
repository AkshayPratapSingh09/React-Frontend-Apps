import { useState } from "react";
import Bomb from "./BombMine.svg";
import Diamond from "./Diamond.svg";

const Box = ({value, setIsBombClicked, activeBoxes,setBoxes,id}) => {
    const [isRevealed,setIsRevealed] = useState(false);
    
    
    const clickHandler=()=>{
if(!isRevealed) {
    setIsRevealed(true)
if (!activeBoxes.has(id)){
setBoxes(prev=>new Set(prev.add(id)))
}

if(value===1){
    setIsBombClicked(true);
}
}
    }
  return (
    <div className='box'
    
    onClick={clickHandler}>
        {isRevealed &&
     <img src={value===0 ?Diamond : Bomb}/>
        }
    </div>
  )
}

export default Box