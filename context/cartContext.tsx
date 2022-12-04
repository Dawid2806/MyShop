import { createContext, ReactNode, useEffect, useState } from "react";
import {
  getCartItemsFromLocalStorage,
  setCartFromLocalStorage,
} from "../components/Cart/CartModal";

export interface CartItem {
  readonly id: string;
  readonly price: number;
  readonly title: string;
  readonly count: number;
  readonly image: string
}
interface CartState {
  readonly items: readonly CartItem[];
  readonly addItemToCart: (item: CartItem) => void;
  readonly removeItemFromCart: (id: CartItem["id"]) => void;
}

export const CartStateContext = createContext<CartState | null>(null);
export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  const addItemToCart = (item: CartItem) => {
    setCartItems((prevState) => {
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
    setCartItems((prevState) => {
      const exisitingItem = prevState.find((elItem) => {
        return elItem.id === id;
      });
      if (exisitingItem && exisitingItem.count <= 1) {
        return prevState.filter((elItem) => {
          return elItem.id != id;
        });
      }
      return prevState.map((elItem) => {
        if (elItem.id === id) {
          return {
            ...elItem,
            count: elItem.count - 1,
          };
        }
        return elItem;
      });
    });
  };
  const updatedCart = (item: CartItem) => {
    addItemToCart(item);
    addCartItemToLocalStorage(item);
  };
  const addCartItemToLocalStorage = (item: CartItem) => {
    const cart = getCartItemsFromLocalStorage();

    setCartFromLocalStorage([...cart, item]);
  };

  useEffect(() => {
    setCartItems(getCartItemsFromLocalStorage);
  }, []);

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
        addItemToCart: updatedCart,
        removeItemFromCart: removeItemFromCart,
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};
