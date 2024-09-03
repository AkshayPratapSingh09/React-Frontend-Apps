import React, { useMemo } from 'react'
import { generateRandomAnswer } from './utils';
import Board from './Board';
import './style.css'


const MineGame = () => {

    const matrix = useMemo(()=>{
        const arr = generateRandomAnswer();
        console.log(arr.length);
        console.log(arr);
        return arr.map((a)=>{
            return {
                id:Math.random()*100,
                value:a,
            }
        });
       },[])
       

  return (
    <div className="main">
    <h1>Game Over !</h1>
    <div className='container'>
    
        <Board matrix={matrix}/>
    </div>
    </div>
  )
}

export default MineGame