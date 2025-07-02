import TicketCard from "@/components/TicketCard";
import { tickets } from "@/lib/data/tickets";

export default function Tickets() {
  return (
    // <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {tickets.map((details) => (
        <TicketCard
          key={`ticket-${details.title}-${details.id}`}
          availableSeats={details.availableSeats}
          category={details.category}
          date={details.date}
          description={details.description}
          imageUrl={details.imageUrl}
          location={details.location}
          price={details.price}
          time={details.time}
          title={details.title}
          totalSeats={details.totalSeats}
        />
      ))}
    </div>
  );
}
