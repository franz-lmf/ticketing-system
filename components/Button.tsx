import { Button } from "@heroui/button";
import { ReactNode } from "react";

const AddEditIconProps = {
  fill: "currentColor",
  // viewBox: "0 0 16 16",
  // height: 16,
  // width: 16,
  stroke: "currentColor",
  strokeWidth: 1.5,
  xmlns: "http://www.w3.org/2000/svg",
  className: "h-5 w-5",
};

export const CartIcon = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
}) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AddToCartIcon = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
}) => {
  return (
    <svg {...AddEditIconProps} {...props}>
      <path
        d="M12 4.5v15m7.5-7.5h-15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RemoveFromCartIcon = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
}) => {
  return (
    <svg {...AddEditIconProps} {...props}>
      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const BTN_TYPES = {
  addToCart: "AddToCart",
  removeFromCart: "RemoveFromCart",
  cart: "Cart",
  ticket: "Ticket",
};

function getIconFromBtnType(btnType: string, ...iconProps: any) {
  // @ts-ignore
  if (btnType === BTN_TYPES.addToCart) {
    return <AddToCartIcon {...iconProps} />;
  }
  // @ts-ignore
  else if (btnType === BTN_TYPES.removeFromCart) {
    return <RemoveFromCartIcon {...iconProps} />;
  }
  // @ts-ignore
  else if (btnType === BTN_TYPES.cart) {
    return <CartIcon {...iconProps} />;
  }
}

export default function Btn({
  isIconOnly,
  btnType,
  children,
  iconProps,
  ...otherProps
}: {
  isIconOnly: boolean;
  btnType: string;
  iconProps?: any;
  children: ReactNode;
}) {
  const btnComponent = getIconFromBtnType(btnType, iconProps);

  // Add size prop to the icon if iconSize is provided
  // if (iconSize) {
  //   // @ts-ignore
  //   btnComponent.props.size = iconSize === "sm" ? 16 : iconSize === "md" ? 20 : 24;
  // }

  return (
    // to debug: isIconOnly prop not working
    <Button
      aria-label="Add/Edit"
      startContent={btnComponent}
      variant="bordered"
      {...otherProps}
    >
      {!isIconOnly && children ? children : null}
    </Button>
  );
}
