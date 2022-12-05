import { createContext, ReactNode, useEffect, useState } from "react";
import { Cart } from "../components/Cart/Cart";
import {
  getCartItemsFromLocalStorage,
  setCartFromLocalStorage,
} from "../components/Cart/CartModal";
import { useCart } from "../hooks/useCart";

export interface CartItem {
  readonly id: string;
  readonly price: number;
  readonly title: string;
  readonly count: number;
  readonly image: string;
  readonly totalAmount: number;
}
interface CartState {
  readonly items: readonly CartItem[];
  readonly addItemToCart: (item: CartItem) => void;
  readonly removeItemFromCart: (id: CartItem["id"]) => void;
  readonly totalAmount: () => number;
}

export const CartStateContext = createContext<CartState | null>(null);
export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const {
    addCartItemToLocalStorage,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    setCartItems,
    totalAmount,
  } = useCart();
  const updatedCart = (item: CartItem) => {
    addItemToCart(item);
    addCartItemToLocalStorage(item);
  };
  useEffect(() => {
    setCartItems(getCartItemsFromLocalStorage);
  }, []);

  useEffect(() => {
    if (cartItems === undefined) {
      return;
    }
    setCartFromLocalStorage(cartItems);
  }, [cartItems]);
  return (
    <CartStateContext.Provider
      value={{
        items: cartItems || [],
        addItemToCart: updatedCart,
        removeItemFromCart: removeItemFromCart,
        totalAmount: totalAmount,
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};
