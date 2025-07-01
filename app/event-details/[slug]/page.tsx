"use client";

import { useParams } from 'next/navigation'
import { title } from "@/components/primitives";
// import Tickets from "@/components/Tickets";
import { notFound } from "next/navigation";

// interface EventDetailsPageProps {
//   params: { slug: string };
// }

export default function EventDetailsPage() {
  const { slug } = useParams();
  console.log('slug', slug)

  // You can fetch event details using the slug here
  // If event not found, you can call notFound()

  return (
    <div>
      <h1 className={`${title({ size: 'lg' })}`}>Event: {slug}</h1>
      <div className="mt-8">

      </div>
    </div>
  );
}
