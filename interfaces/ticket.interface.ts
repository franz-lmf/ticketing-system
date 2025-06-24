export interface TicketDetails {
  id?: string;
  title: string;
  description?: string;
  price: number;
}

export interface CartItem extends TicketDetails {
  quantity: number;
}

export interface CartDetails {
  items: CartItem[];
  totalPrice: number;
}

export interface CartActions {
  addToCart: (item: TicketDetails) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export interface CartContextType extends CartDetails, CartActions {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
