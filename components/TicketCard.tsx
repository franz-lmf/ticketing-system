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
      className="group relative w-[280px] overflow-hidden bg-transparent outline outline-custom-accent rounded-b-3xl"
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
            className="bg-custom-accent hover:bg-custom-accent/90 text-white text-lg px-8 py-3 rounded-full shadow-lg mt-10"
            size="lg"
            onPress={() => {
              dispatch(addToCart({ ...props }));
            }}
          >
            Buy Ticket
          </Button>
          <Button
            className="bg-custom-accent-secondary hover:bg-custom-accent-secondary/90 text-white text-lg px-8 py-3 rounded-full shadow-lg mt-5"
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

      <div className="details-wrapper px-2 py-3 bg-transparent">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-white/80 text-left">
            {title}
          </p>
          {/* <ChevronDownIcon className="size-6" /> */}
        </div>
        {/* <div className="flex flex-col">
        </div> */}
        <div className="flex-col gap-2 items-center text-white/60 mt-2">
          <div className="flex w-full justify-between items-center">
            <div className="flex">
              <CalendarIcon className="text-custom-accent size-6" />
              <span className="ml-2">{date}</span>
            </div>
            <div className="flex">
              <ClockIcon className="text-custom-accent size-6" />
              <span className="ml-2">{time}</span>
            </div>
          </div>
          <div className="flex w-full items-center mt-1">
            <MapPinIcon className="text-custom-accent size-6" />
            <span className="ml-2">{location}</span>
          </div>
        </div>
      </div>
      <Button
        className="bg-custom-accent hover:bg-custom-accent/90 text-white rounded-b-3xl rounded-t-none"
        size="lg"
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
          className="bg-custom-accent hover:bg-custom-accent/90 text-white"
          size="sm"
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
