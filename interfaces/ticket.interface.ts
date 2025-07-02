export interface TicketDetails {
  id?: string;
  title: string;
  description?: string;
  imageUrl: string;
  date: string;
  time: string;
  location: string;
  category?: string;
  availableSeats?: number;
  totalSeats?: number;
  price: number;
  slug?: string;
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
