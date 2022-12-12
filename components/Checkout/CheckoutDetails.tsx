import React from "react";
import { useCartState } from "../../hooks/useContext";
import { ItemInCheckout } from "./ItemInCheckout";
export const CheckoutDetails = () => {
  const cartState = useCartState();
  return (
    <div className="py-12 bg-gray-50 md:py-24">
      <div className="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
        <div className="flex items-center">
          <span className="w-10 h-10 bg-blue-700 rounded-full"></span>

          <h2 className="ml-4 font-medium text-gray-900">DaveShop</h2>
        </div>

        <div>
          <p className="text-2xl font-medium tracking-tight text-gray-900">
            {cartState.totalAmount()}$
          </p>

          <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
        </div>

        <div>
          <div className="flow-root">
            <ul className="-my-4 divide-y divide-gray-100">
              {cartState.items.map((item) => {
                return (
                  <ItemInCheckout
                    key={item.id}
                    name={item.title}
                    image={item.image}
                    count={item.count}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
