import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import PlusIconCircle from "./icons/PlusIconCircle";

import {
  addToCart,
  removeFromCart,
  clearCart,
  selectCartItems,
  selectTotalPrice,
} from "@/lib/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import MinusIconCircle from "@/components/icons/MinusIconCircle";
import { getHrefFromName } from "@/helpers/site.helpers";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  const { theme } = useTheme();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 z-50 shadow-lg transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}
      `}
      style={{ height: "100vh" }}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button
          className="text-gray-500 hover:text-black dark:hover:text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
      <div className="p-4 flex-1 overflow-y-auto">
        {items.length === 0 ? (
          <p className="text-gray-400 dark:text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          <ul>
            {items.map((item, idx) => (
              <li
                key={idx}
                className={`flex justify-between items-center${idx !== items.length - 1 ? " mb-4" : ""}`}
              >
                <div className="flex items-center">
                  <Button
                    isIconOnly
                    aria-label="Remove from cart"
                    className="mr-1 bg-transparent"
                    variant="flat"
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }}
                  >
                    <MinusIconCircle isOutline={true} />
                  </Button>
                  {item.quantity}

                  <Button
                    isIconOnly
                    aria-label="Add more to cart"
                    className="ml-1 mr-2 bg-transparent"
                    variant="flat"
                    onPress={() => {
                      dispatch(addToCart(item));
                    }}
                  >
                    <PlusIconCircle isOutline={true} />
                  </Button>

                  <span className="font-medium">{item.title}</span>
                </div>
                <span>₱{(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {items.length > 0 && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-sm">
            Want to start over?
            <Button
              className="ml-1 px-1 font-bold text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-200 bg-transparent"
              variant="flat"
              onPress={() => {
                dispatch(clearCart());
                onClose();
              }}
            >
              Empty Cart
            </Button>
          </span>
        </div>
      )}

      {items.length > 0 && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            as={Link}
            className="w-full bg-green-600 text-white py-2 rounded"
            href={getHrefFromName("checkout")}
            onPress={onClose}
          >
            Checkout ₱{totalPrice.toFixed(2)}
          </Button>
        </div>
      )}
    </div>
  );
}
