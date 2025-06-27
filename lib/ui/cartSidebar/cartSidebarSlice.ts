import { createSlice } from "@reduxjs/toolkit";

import { CartSidebarProps } from "@/interfaces/cartSidebar.interface";

export const initialState: CartSidebarProps = {
  isOpen: false,
};

export const cartSidebarSlice = createSlice({
  name: "cartSidebar",
  initialState: initialState,
  reducers: {
    toogleCartSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    openCartSidebar: (state) => {
      state.isOpen = true;
    },
    closeCartSidebar: (state) => {
      state.isOpen = false;
    },
  },
  selectors: {
    selectIsSidebarOpen: (state: CartSidebarProps) => state.isOpen,
  },
});

export const { toogleCartSidebar, openCartSidebar, closeCartSidebar } =
  cartSidebarSlice.actions;
// export const cartReducer = cartSlice.reducer
export const { selectIsSidebarOpen } = cartSidebarSlice.selectors;
