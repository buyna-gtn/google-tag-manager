"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { Button } from "./ui/button";

export const AddToCart: React.FC = () => {
  return (
    <Button
      onClick={() =>
        sendGTMEvent({
          event: "add_to_cart",
          item_label: "iPad",
          item_price: 1400,
          amount: 1,
        })
      }
    >
      Add to Cart
    </Button>
  );
};
