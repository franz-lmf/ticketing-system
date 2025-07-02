import { Image } from "@heroui/image";
import React from "react";

import { TicketDetails } from "@/interfaces/ticket.interface";
import styles from "@/styles/ticket-info.module.scss";

const TicketInfo = (ticketDetail: TicketDetails) => {
  const { imageUrl, description, title, location, date, time } = ticketDetail;
  const {
    ticketDetailsContainer,
    body,
    eyebrowHeadline,
    headline,
    description: descriptionClass,
  } = styles;

  return (
    <div
      className={`flex flex-col justify-between sm:flex-row ${ticketDetailsContainer}`}
    >
      <div className="flex w-full md:w-auto justify-center">
        <Image
          alt="Card background"
          className="z-0 w-64 min-w-72 h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75 group-hover:blur-sm rounded-t-xl rounded-b-none  mx-auto "
          src={imageUrl}
        />
      </div>
      <div
        className={`flex-col container text-right w-full md:w-[40%] xl:w-[50%] mt-10 md:mt-auto ${body}`}
      >
        <p className={eyebrowHeadline}>{description}</p>
        <h1 className={headline}>{title}</h1>
        <p className={`ml-2 ${descriptionClass}`}>{date}</p>
        <p className={`ml-2 ${descriptionClass}`}>{time}</p>
        <p className={`ml-2 ${descriptionClass}`}>{location}</p>
      </div>
      <div>
        <p>Buy Tickets</p>
      </div>
    </div>
  );
};

export default TicketInfo;
