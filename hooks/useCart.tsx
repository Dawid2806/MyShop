import React, { useEffect, useState } from "react";
import {
  getCartItemsFromLocalStorage,
  setCartFromLocalStorage,
} from "../components/Cart/CartModal";
import { CartItem } from "../context/cartContext";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[] | undefined>(undefined);

  const addItemToCart = (item: CartItem) => {
    setCartItems((prevState) => {
      if (!prevState) {
        return [];
      }
      const existingItem = prevState.find(
        (existingItem) => existingItem.id === item.id
      );
      if (!existingItem) {
        return [...prevState, item];
      }
      return prevState.map((existingItem) => {
        if (existingItem.id === item.id) {
          return {
            ...existingItem,
            count: existingItem.count + 1,
          };
        }
        return existingItem;
      });
    });
  };
  const removeItemFromCart = (id: string) => {
    setCartItems((prevState = []) => {
      const existingItem = prevState.find((eItem) => eItem.id === id);
      if (!existingItem) {
        return;
      }
      if (existingItem.count <= 1) {
        return prevState.filter((eItem) => eItem.id !== id);
      }
      return prevState.map((eItem) => {
        if (eItem.id === id) {
          return {
            ...eItem,
            count: eItem.count - 1,
          };
        }
        return eItem;
      });
    });
  };

  const addCartItemToLocalStorage = (item: CartItem) => {
    const cart = getCartItemsFromLocalStorage();
    const existing = cart.find((existing) => existing.id === item.id);
    if (!existing) {
      return setCartFromLocalStorage([...cart, item]);
    }
    const updatedCart = cart.map((existingItem) => {
      if (existingItem.id === item.id) {
        return {
          ...existingItem,
          count: existingItem.count + 1,
        };
      }
      return existingItem;
    });
    return setCartFromLocalStorage(updatedCart);
  };

  const getCartTotalAmount = () => {
    if (!cartItems) return 0;
    return cartItems
      .map((item) => item.price * item.count)
      .reduce((cur, num) => cur + num, 0);
  };

  return {
    addCartItemToLocalStorage,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    setCartItems,
    getCartTotalAmount,
  };
};
