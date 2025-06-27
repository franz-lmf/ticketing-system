import { combineSlices, configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "@/lib/ui/cart/cartSlice";
import { cartSidebarSlice } from "@/lib/ui/cartSidebar/cartSidebarSlice";

const rootReducer = combineSlices(cartSlice, cartSidebarSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
