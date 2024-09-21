import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [player, setPlayer] = useState(null);

  function handleClick() {
    setPlayer(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {player ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
