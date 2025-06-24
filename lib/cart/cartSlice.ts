import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartDetails, CartItem, TicketDetails } from '@/interfaces/ticket.interface'

export const initialCartState: CartDetails = {
  items: [],
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<TicketDetails>) => {
      const existingItem = state.items.find(
        (item) =>
          item.title === action.payload.title && item.price === action.payload.price
      )

      if (!existingItem) {
        const newItem: CartItem = {
          ...action.payload,
          id: action.payload.id || crypto.randomUUID(),
          quantity: 1
        }

        state.items.push(newItem)
        state.totalPrice += newItem.price
      } else {
        existingItem.quantity += 1
        state.totalPrice += existingItem.price
      }
    },
    removeFromCart: (state, action: PayloadAction<TicketDetails>) => {
      const existingItem = state.items.find(
        (item) =>
          item.title === action.payload.title && item.price === action.payload.price
      )

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
          state.totalPrice -= existingItem.price
        } else {
          state.items = state.items.filter(
            (item) =>
              item.title !== action.payload.title || item.price !== action.payload.price
          )
          state.totalPrice -= existingItem.price
        }
      }
    },
    clearCart: (state) => {
      state.items = []
      state.totalPrice = 0
    }
  },
  selectors: {
    selectCartItems: (state: CartDetails) => state.items,
    selectTotalPrice: (state: CartDetails) => state.totalPrice
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
// export const cartReducer = cartSlice.reducer
export const { selectCartItems, selectTotalPrice } = cartSlice.selectors
