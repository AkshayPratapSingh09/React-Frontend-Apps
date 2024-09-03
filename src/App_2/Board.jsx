import { act, useState } from "react"
import Box from "./Box"

const Board = ({matrix}) => {

    const [activeBoxes,setActiveBoxes] = useState(new Set());
    const [isBombClicked,setIsBombClicked] = useState(false);
    console.log(activeBoxes);
    
   
  return (
    <div className="board">
        {matrix.map((item)=>
        <>
        <Box key={item.id} value={item.value} isBombClicked={setIsBombClicked} activeBoxes={activeBoxes} setBoxes={setActiveBoxes}{...item}/>
        </>
        
        )}
    </div>
  )
}

export default Board