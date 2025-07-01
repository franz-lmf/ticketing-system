"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Drawer, DrawerContent } from "@heroui/drawer";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

import {
  addToCart,
  removeFromCart,
  clearCart,
  selectCartItems,
  selectTotalPrice,
} from "@/lib/ui/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getHrefFromName } from "@/helpers/site.helpers";
import {
  selectIsSidebarOpen,
  closeCartSidebar,
  toogleCartSidebar,
} from "@/lib/ui/cartSidebar/cartSidebarSlice";

export default function CartSidebar() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  const { theme } = useTheme();

  const isSidebarOpen = useAppSelector(selectIsSidebarOpen);

  return (
    <Drawer
      hideCloseButton
      className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      isOpen={isSidebarOpen}
      placement="right"
      size="sm"
      onOpenChange={() => dispatch(toogleCartSidebar())}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button
                className="text-gray-500 hover:text-black dark:hover:text-white text-2xl"
                onClick={() => dispatch(closeCartSidebar())}
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
                          onPress={() => dispatch(removeFromCart(item))}
                        >
                          <MinusCircleIcon className="text-custom-accent size-6" />
                        </Button>
                        {item.quantity}

                        <Button
                          isIconOnly
                          aria-label="Add more to cart"
                          className="ml-1 mr-2 bg-transparent"
                          variant="flat"
                          onPress={() => dispatch(addToCart(item))}
                        >
                          <PlusCircleIcon className="text-custom-accent size-6" />
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
                      dispatch(closeCartSidebar());
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
                  className="w-full bg-custom-accent text-white py-2 rounded"
                  href={getHrefFromName("checkout")}
                  onPress={onClose}
                >
                  Proceed to Checkout ₱{totalPrice.toFixed(2)}
                </Button>
              </div>
            )}
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
