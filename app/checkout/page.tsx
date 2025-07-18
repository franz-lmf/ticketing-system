"use client";

import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { LockClosedIcon } from "@heroicons/react/24/outline";

import { title } from "@/components/primitives";
import { useAppSelector } from "@/lib/hooks";
import { selectTotalPrice } from "@/lib/ui/cart/cartSlice";

// LockClosed

export default function CheckoutPage() {
  const totalPrice = useAppSelector(selectTotalPrice);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Order placed!");
    console.log("Form submitted:", form);
  };

  return (
    <div className="mx-auto max-w-xl pb-10">
      <h1 className={title()}>Checkout</h1>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <Card className="space-y-4 p-6">
          <h2 className="mb-2 text-lg font-semibold">User Details</h2>
          <Input
            required
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            required
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            required
            label="Phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
          />
          <Input
            required
            label="Age"
            min={1}
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
          />
        </Card>
        <Card className="space-y-4 p-6">
          <h2 className="mb-2 text-lg font-semibold">Credit Card Payment</h2>
          <Input
            required
            label="Card Number"
            maxLength={19}
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={form.cardNumber}
            onChange={handleChange}
          />
          <Input
            required
            label="Cardholder Name"
            name="cardName"
            value={form.cardName}
            onChange={handleChange}
          />
          <div className="flex gap-4">
            <Input
              required
              className="flex-1"
              label="Expiry"
              name="expiry"
              placeholder="MM/YY"
              value={form.expiry}
              onChange={handleChange}
            />
            <Input
              required
              className="flex-1"
              label="CVC"
              maxLength={4}
              name="cvc"
              value={form.cvc}
              onChange={handleChange}
            />
          </div>
        </Card>
        <Button
          className="w-full py-8 text-lg font-medium text-white"
          color="secondary"
          startContent={<LockClosedIcon className="size-6" />}
          type="submit"
        >
          Place Order &nbsp;₱{totalPrice.toFixed(2)}
        </Button>
      </form>
    </div>
  );
}
