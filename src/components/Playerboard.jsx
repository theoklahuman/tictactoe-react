import { useState } from "react";
import Player from "./Player";

function Playerboard() {
  
  return (
    <ol id="players">
      <Player name="John Doe" symbol="X"/>
      <Player name="Jane Doe" symbol="O"/>
    </ol>
  );
}

export default Playerboard;
