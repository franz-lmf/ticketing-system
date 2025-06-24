"use client";

import { useState } from "react";
import { title } from "@/components/primitives";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { useAppSelector } from "@/lib/hooks";
import { selectTotalPrice } from "@/lib/cart/cartSlice";

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
    <div className="max-w-xl mx-auto pb-10">
      <h1 className={title()}>Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-6 mt-8">
        <Card className="p-6 space-y-4">
          <h2 className="text-lg font-semibold mb-2">User Details</h2>
          <Input
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <Input
            label="Age"
            name="age"
            type="number"
            min={1}
            value={form.age}
            onChange={handleChange}
            required
          />
        </Card>
        <Card className="p-6 space-y-4">
          <h2 className="text-lg font-semibold mb-2">Credit Card Payment</h2>
          <Input
            label="Card Number"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            required
            maxLength={19}
            placeholder="1234 5678 9012 3456"
          />
          <Input
            label="Cardholder Name"
            name="cardName"
            value={form.cardName}
            onChange={handleChange}
            required
          />
          <div className="flex gap-4">
            <Input
              label="Expiry"
              name="expiry"
              value={form.expiry}
              onChange={handleChange}
              required
              placeholder="MM/YY"
              className="flex-1"
            />
            <Input
              label="CVC"
              name="cvc"
              value={form.cvc}
              onChange={handleChange}
              required
              maxLength={4}
              className="flex-1"
            />
          </div>
        </Card>
        <Button color="success" type="submit" className="w-full">
          Place Order ₱{totalPrice.toFixed(2)}
        </Button>
      </form>
    </div>
  );
}