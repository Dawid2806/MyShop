import { CartItem } from "../../context/cartContext";


export const getCartItemsFromLocalStorage = (): CartItem[] => {
  const itemFromLocalStorage = localStorage.getItem("DAVE_SUPER_CART");
  if (!itemFromLocalStorage) {
    return [];
  }
  try {
    const items = JSON.parse(itemFromLocalStorage);
    
    return items;
  } catch (err) {
    console.error(err);
    return [];
  }
};
export const setCartFromLocalStorage = (cartItems: CartItem[]) => {

  localStorage.setItem("DAVE_SUPER_CART", JSON.stringify(cartItems));
};
