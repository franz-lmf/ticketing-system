"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

import { title } from "@/components/primitives";
import TicketInfo from "@/components/TicketInfo";
import { tickets } from "@/lib/data/tickets";
import { TicketDetails } from "@/interfaces/ticket.interface";
import { normalize } from "@/helpers/string.helpers";

export default function EventDetailsPage() {
  const { slug } = useParams();
  const ticketDetail: TicketDetails | undefined = tickets.find(
    (ticket) =>
      normalize(ticket?.slug ?? "") === normalize(slug as string) ||
      normalize(ticket.title) === normalize(slug as string),
  );

  if (!ticketDetail) {
    notFound();
  }

  return (
    <div>
      <h1 className={`${title({ size: "lg" })}`}>Event: {slug}</h1>
      <div className="mt-8">
        <TicketInfo {...ticketDetail} />
      </div>
    </div>
  );
}
