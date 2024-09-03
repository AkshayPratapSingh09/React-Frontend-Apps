
import Diamond from "./Diamond.svg"
const GameOver = ({roundCount, onClick}) => {
  return (
    <div className="game-over">
    <div>Game Over in {roundCount} rounds</div>
    <button onClick={onClick}>Reset</button>
    <img src={Diamond} alt="" />
    </div>
  )
}

export default GameOver