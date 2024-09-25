import { useState } from "react";
import { genTicket, sum } from "./Helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winningSum }) {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket}></Ticket>
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congratulations, You Won!"}</h3>
    </div>
  );
}
