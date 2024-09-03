//  create a board
// dots/circles should appear wherver user clicks
// support undo ie. remove last added circle
// support redo ie. add last removed circle
//  reset => setting the board to its original state

import { useState, useMemo } from "react";
import "./board.css";
import Box from "./Box";
import { generateRandomColors, shuffleArray } from "./utils";
import GameOver from "./GameOver";

const Game = ({ total }) => {
  const [activeColors, setActiveColors] = useState([]);
  const [revealedColors, setRevealedColors] = useState(new Set());
  const [roundCount,setRoundCount] = useState(0);
  

  const boxes = useMemo(() => {
    const colors = generateRandomColors(total / 2);
    const finalColors = shuffleArray([...colors, ...colors]);

    return finalColors.map((color, id) => {
      return {
        id,
        bgColor: color,
      };
    });
  }, [total]);

  const handleClick = (currentSelectorColor) => {
    if (activeColors.length == 0) {

      setActiveColors([currentSelectorColor]);
      return;

    }

    if (activeColors[0] === currentSelectorColor) {

      setRevealedColors((prev) => new Set(prev.add(currentSelectorColor)));
      setActiveColors([]);

    } else {

      setActiveColors((prev) => [...prev, currentSelectorColor]);
      setTimeout(() => {
        setActiveColors([]);
      }, 400);

    }

    setRoundCount((prev) => prev + 1);
  };

  const resetHandler=()=>{
    setActiveColors([])
    setRevealedColors(new Set())
    setRoundCount(0);
  }

  return (
    <>
    {revealedColors.size === total /2 ? (
        <GameOver roundCount={roundCount} onClick={resetHandler}/>
    ):<div className="container">
    <div className="boxes">
      {
        // The spread operator would essentially pass these
        // properties as separate attributes to the <Box> component:
        // <Box key={1} id={1} bgColor="rgb(255, 0, 0)" />

        boxes.map((box) => (
          <Box key={box.id} 
          {...box} 
          onClick={handleClick}
          revealedColors={revealedColors}
          activeColors={activeColors}
          />
        ))
      }
    </div>
  </div>}
      
    </>
  );
};

export default Game;
