import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ ticket }) {
  return (
    <>
      <p>Our Ticket</p>
      <div className="Ticket">
        {ticket.map((num, idx) => (
          <TicketNum num={num} key={idx}></TicketNum>
        ))}
      </div>
    </>
  );
}
