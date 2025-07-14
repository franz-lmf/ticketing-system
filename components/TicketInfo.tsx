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
      className={`flex flex-col justify-between sm:flex-row max-w-72 md:max-w-full ${ticketDetailsContainer}`}
    >
      <div className="flex w-full md:w-auto justify-center">
        <Image
          alt="Card background"
          className={ticketInfoImage}
          src={imageUrl}
        />
      </div>
      {/* md:w-[40%] lg:w-[45%] xl:w-[50%]  */}
      <div
        className={`flex flex-col container text-left w-full max-w-72 mt-10 md:mt-auto mx-auto lg:mr-auto justify-between md:ml-8 ${body}`}
      >
        <div>
          <p className={eyebrowHeadline}>{description}</p>
          {/* <h1 className={headline}>{title}</h1> */}
          <h1 className="text-6xl lg:text-6xl font-bold capitalize my-3">{title}</h1>
          <div className="">
            <p className={descriptionClass}>{date}</p>
            <p className={descriptionClass}>{time}</p>
            <p className={descriptionClass}>{location}</p>
          </div>
        </div>
        <h1 className="my-5 md:mt-auto">
          <span className="font-light text-4xl md:text-5xl mr-1 mt-5">₱</span>
          <span className="font-normal text-primary text-6xl md:text-7xl">
            {price.toFixed(2)}
          </span>
        </h1>
      </div>
      <div className="bg-primary min-w-14 w-48">
        <p>Buy Tickets</p>
      </div>
    </div>
  );
};

export default TicketInfo;
