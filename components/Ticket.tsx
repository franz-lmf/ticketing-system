"use client";

import { Card, CardFooter } from "@heroui/card";

import { TicketDetails } from "@/interfaces/ticket.interface";
import Btn, { BTN_TYPES } from "@/components/Button";
import { Button } from "@heroui/button";


import {
  addToCart,
  removeFromCart,
  clearCart,
  selectCartItems,
  selectTotalPrice,
} from "@/lib/cart/cartSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import TicketIcon from "./icons/TicketIcon";

export default function Ticket({
  title,
  price,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
}: TicketDetails) {

  const dispatch = useAppDispatch();
  const cartTotalPrice = useAppSelector(selectTotalPrice);

  return (
    <Card className="p-5" shadow="sm">
      <b className="text-xl">{title}</b>
      <p className="font-thin text-sm text-left mt-1">{description}</p>
      <CardFooter className="text-small justify-between mt-2">
        {/* <Btn className="w-full" btnType={BTN_TYPES.cart} color="success" onPress={() => {
          dispatch(addToCart({ title, price }));
        }}>
          <span>₱{price.toFixed(2)}</span>
        </Btn> */}
        <Button className="w-full" color="success" startContent={<TicketIcon isOutline={false} />} onPress={() => {
          dispatch(addToCart({ title, price }));
        }}>
          <span>₱{price.toFixed(2)}</span>
        </Button>
      </CardFooter>
    </Card >
  );
}
