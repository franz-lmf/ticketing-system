import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";

export default function ContactUsPage() {
  const commonInputProps: {
    className?: string;
    labelPlacement: "outside" | "outside-left" | "inside";
    isRequired: boolean;
    radius: "none" | "sm" | "md" | "lg" | "full";
  } = {
    labelPlacement: "outside",
    isRequired: true,
    radius: "sm",
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <h1 className="text-2xl font-bold mb-2 mx-auto my-5">Contact Us</h1>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  placeholder="Enter your first name"
                  type="text"
                  {...commonInputProps}
                />
              </div>
              <div className="flex-1">
                <Input
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  placeholder="Enter your last name"
                  type="text"
                  {...commonInputProps}
                />
              </div>
            </div>
            <Input
              className="mt-10"
              id="mobile"
              label="Your Mobile Number"
              name="mobile"
              placeholder="e.g. 09171234567"
              type="number"
              {...commonInputProps}
            />
            <Input
              id="address"
              label="Your Address"
              name="address"
              placeholder="Enter your address"
              type="text"
              {...commonInputProps}
            />
            <Input
              id="email"
              label="Your Email"
              name="email"
              placeholder="Enter your email address"
              type="email"
              {...commonInputProps}
            />
            <Textarea
              id="comments"
              label="Comments"
              name="comments"
              placeholder="How can we help you?"
              rows={4}
              {...commonInputProps}
            />
            <Button
              className="w-auto font-semibold text-white"
              color="secondary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
