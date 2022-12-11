import React from "react";
import { CheckoutDetails } from "./CheckoutDetails";
import { CheckoutForm } from "./CheckoutForm";

export const Checkout = () => {
  return (
    <section>
      <h1 className="sr-only">Checkout</h1>

      <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
        <CheckoutDetails />

        <div className="py-12 bg-white md:py-24">
          <div className="max-w-lg px-4 mx-auto lg:px-8">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </section>
  );
};
