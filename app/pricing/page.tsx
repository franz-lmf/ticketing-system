import { Counter } from "@/components/counter";
import { title } from "@/components/primitives";
import Tickets from "@/components/Tickets";
import { Button } from "@heroui/button";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Pricing</h1>

      <Tickets />

      <Button
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        radius="full"
      >
        Button
      </Button>
    </div>
  );
}
