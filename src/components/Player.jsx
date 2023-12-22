import { useState } from "react";

function Player({ name, symbol}) {
    const [playerName, setPlayerName] = useState(name);
      const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);
      function handleClick() {
        setIsEditButtonClicked(!isEditButtonClicked);
      }
      function changeName(evt) {
        setPlayerName(evt.target.value);
      }
  return (
    <>
    <li>
      <span className="player-info">
        <span className="player-name">{playerName}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>Edit</button>
    </li>
    {isEditButtonClicked && <input value={playerName} onChange={changeName}/>}
    </>
  )
}

export default Player;