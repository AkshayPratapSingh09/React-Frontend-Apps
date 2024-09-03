import { useEffect, useState } from "react";

const DEFAULT_BG_COLOR ="#ffffff";

const Box = ({ bgColor, onClick, revealedColors, activeColors }) => {

    const isRevealed = revealedColors.has(bgColor);
    const [backgroundColor,setBackgroundColor] = useState(
       isRevealed? bgColor : DEFAULT_BG_COLOR);



    const clickHandler =()=>{

        if(backgroundColor !== DEFAULT_BG_COLOR) return;
          
        setBackgroundColor(bgColor);
        onClick(bgColor);
    } 

    useEffect(()=>{
        if(!isRevealed && activeColors.length === 0){
            setBackgroundColor(DEFAULT_BG_COLOR);
        }
    },[isRevealed,activeColors])


  return <div 
  className="box" 
  style={{ backgroundColor }}
  onClick={clickHandler}
  >

  </div>;
};

export default Box;
