import { Image } from "@heroui/image";
import React from "react";

import { TicketDetails } from "@/interfaces/ticket.interface";
import styles from "@/styles/ticket-info.module.scss";

const TicketInfo = (ticketDetail: TicketDetails) => {
  const { imageUrl, description, title, location, date, time, price } =
    ticketDetail;
  const { body, headline, description: descriptionClass } = styles;
  const ticketDetailsContainer = styles["ticket-details-container"];
  const eyebrowHeadline = styles["eyebrow-headline"];
  const ticketInfoImage = styles["ticket-info-image"];

  return (
    <div
      className={`flex max-w-72 flex-col justify-between sm:flex-row md:max-w-full ${ticketDetailsContainer}`}
    >
      <div className="flex w-full justify-center md:w-auto">
        <Image
          alt="Card background"
          className={ticketInfoImage}
          src={imageUrl}
        />
      </div>
      {/* md:w-[40%] lg:w-[45%] xl:w-[50%]  */}
      <div
        className={`container mx-auto mt-10 flex w-full max-w-72 flex-col justify-between text-left md:ml-8 md:mt-auto lg:mr-auto ${body}`}
      >
        <div>
          <p className={eyebrowHeadline}>{description}</p>
          {/* <h1 className={headline}>{title}</h1> */}
          <h1 className="my-3 text-6xl font-bold capitalize lg:text-6xl">
            {title}
          </h1>
          <div className="">
            <p className={descriptionClass}>{date}</p>
            <p className={descriptionClass}>{time}</p>
            <p className={descriptionClass}>{location}</p>
          </div>
        </div>
        <h1 className="my-5 md:mt-auto">
          <span className="mr-1 mt-5 text-4xl font-light md:text-5xl">₱</span>
          <span className="text-6xl font-normal text-primary md:text-7xl">
            {price.toFixed(2)}
          </span>
        </h1>
      </div>
      <div className="w-48 min-w-14 bg-primary">
        <p>Buy Tickets</p>
      </div>
    </div>
  );
};

export default TicketInfo;
