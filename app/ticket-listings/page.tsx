"use client";

import { title } from "@/components/primitives";
import Tickets from "@/components/Tickets";

export default function TicketListingPage() {
  return (
    <div>
      <h1 className={`${title({ size: "lg" })}`}>Concerts</h1>

      <div className="mt-8">
        <Tickets />
      </div>
    </div>
  );
}
