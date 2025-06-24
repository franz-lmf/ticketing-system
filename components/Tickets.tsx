import Ticket from "@/components/Ticket";
import { TicketDetails } from "@/interfaces/ticket.interface";

export default function Tickets() {
  const tickets: TicketDetails[] = [
    {
      title: "Orange",
      price: 5.5,
    },
    {
      title: "Tangerine",
      price: 3.0,
    },
    {
      title: "Raspberry",
      price: 10.0,
    },
    {
      title: "Lemon",
      price: 5.3,
    },
    {
      title: "Avocado",
      price: 15.7,
    },
    {
      title: "Lemon 2",
      price: 8.0,
    },
    {
      title: "Banana",
      price: 7.5,
    },
    {
      title: "Watermelon",
      price: 12.2,
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {tickets.map((details) => (
        <Ticket
          key={`ticket-${details.title}-${details.price}`}
          price={details.price}
          title={details.title}
        />
      ))}
    </div>
  );
}
