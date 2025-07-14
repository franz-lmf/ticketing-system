"use client";

import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import {
  CalendarIcon,
  ClockIcon,
  ArrowDownTrayIcon as DownloadIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon as OpenLink,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

import { TicketDetails } from "@/interfaces/ticket.interface";
import { addToCart } from "@/lib/ui/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";

export default function TicketCard(props: TicketDetails) {
  const {
    title,
    price,
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imageUrl,
    availableSeats,
    date,
    time,
    location,
  } = props;
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <Card
      isFooterBlurred
      className="group relative w-[350px] overflow-hidden bg-transparent  outline-custom-primary rounded-b-3xl"
      shadow="sm"
      onPress={() => {
        if (title) {
          const slug = encodeURIComponent(
            title.toLowerCase().replace(/\s+/g, "-"),
          );

          router.push(`/event-details/${slug}`);
        }
      }}
    >
      {/* <div className="bg-primary w-1/4 absolute right-0 h-full z-10 flex items-center justify-center text-white font-bold text-lg rounded-bl-none rounded-tl-none group-hover:bg-primary/90 transition-colors duration-300 px-3">
        <DownloadIcon className="size-6" />
        Buy Tickets
      </div> */}
      <div className="relative w-full h-full">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75 group-hover:blur-sm rounded-t-xl rounded-b-none"
          src={imageUrl}
        />

        {/* Overlay for Buy Ticket button on hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* <p>{description}</p> */}
          <Button
            className="hover:bg-primary/90 text-white text-lg px-8 py-3 rounded-full shadow-lg mt-10"
            color="primary"
            size="lg"
            onPress={() => {
              dispatch(addToCart({ ...props }));
            }}
          >
            Buy Ticket
          </Button>
          <Button
            className="bg-info hover:bg-info/90 text-white text-lg px-8 py-3 rounded-full shadow-lg mt-5"
            endContent={<OpenLink className="size-6" />}
            size="lg"
            onPress={() => {
              if (title) {
                const slug = encodeURIComponent(
                  title.toLowerCase().replace(/\s+/g, "-"),
                );

                router.push(`/event-details/${slug}`);
              }
            }}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Relevant Ticket Info */}
      <div className="details-wrapper px-4 py-6 bg-text-background">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white/80 text-left py-2">
            {title}
          </h1>
          {/* <ChevronDownIcon className="size-6" /> */}
        </div>
        {/* <div className="flex flex-col">
        </div> */}
        <div className="flex-col gap-2 items-center text-white/60 mt-2">
          <div className="flex w-full justify-between items-center">
            <div className="flex">
              <CalendarIcon className="text-custom-primary size-6" />
              <span className="ml-2 font-normal">{date}</span>
            </div>
            {/* <div className="flex">
              <ClockIcon className="text-custom-primary size-6" />
              <span className="ml-2 font-normal">{time}</span>
            </div> */}
          </div>
          <div className="flex w-full items-center mt-3">
            <MapPinIcon className="text-custom-primary size-6" />
            <span className="ml-2 font-normal">{location}</span>
          </div>
        </div>
      </div>
      <Button
        className="hover:bg-primary/90 text-white rounded-b-3xl rounded-t-none py-6"
        size="lg"
        color="primary"
        startContent={<DownloadIcon className="size-6" />}
        onPress={() => {
          dispatch(addToCart({ ...props }));
        }}
      >
        <span>₱{price.toFixed(2)}</span>
      </Button>

      {/* <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-xl text-white/60">{title}</p>
          </div>
        </div>
        <Button
          className=" hover:bg-primary/90 text-white"
          size="sm"
          color="primary"
          startContent={<DownloadIcon isOutline={false} />}
          onPress={() => {
            dispatch(addToCart({ title, price }));
          }}
        >
          <span>₱{price.toFixed(2)}</span>
        </Button>
      </CardFooter> */}
    </Card>

    // <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
    //     <CardHeader className="absolute z-10 top-1 flex-col items-start">
    //       <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
    //       <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
    //     </CardHeader>
    //     <Image
    //       removeWrapper
    //       alt="Relaxing app background"
    //       className="z-0 w-full h-full object-cover"
    //       src="https://heroui.com/images/card-example-5.jpeg"
    //     />
    //     <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
    //       <div className="flex flex-grow gap-2 items-center">
    //         <Image
    //           alt="Breathing app icon"
    //           className="rounded-full w-10 h-11 bg-black"
    //           src="https://heroui.com/images/breathing-app-icon.jpeg"
    //         />
    //         <div className="flex flex-col">
    //           <p className="text-tiny text-white/60">Breathing App</p>
    //           <p className="text-tiny text-white/60">Get a good night&#39;s sleep.</p>
    //         </div>
    //       </div>
    //       <Button radius="full" size="sm">
    //         Get App
    //       </Button>
    //     </CardFooter>
    //   </Card>
  );
}
