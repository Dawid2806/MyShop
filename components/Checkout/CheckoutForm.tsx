import React from "react";
import { Input } from "./Input";

export const CheckoutForm = () => {
  return (
    <form className="grid grid-cols-6 gap-4">
      <Input
        InputName="First Name"
        inputType="text"
        inputId="FirstName"
        col={3}
      />
      <Input
        InputName="Last Name"
        inputType="text"
        inputId="LastName"
        col={3}
      />
      <Input InputName="Email" inputType="Email" inputId="Email" col={6} />
      <Input InputName="Phone" inputType="tel" inputId="Phone" col={6} />

      <fieldset className="col-span-6">
        <legend className="block text-sm font-medium text-gray-700">
          Card Details
        </legend>

        <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
          <div>
            <Input
              inputType={"text"}
              inputId={"CardNumber"}
              placeholder="Card Number"
            />
          </div>

          <div className="flex -space-x-px">
            <div className="flex-1">
              <Input
                inputType={"text"}
                inputId={"CardExpiry"}
                placeholder="Expiry Date"
              />
            </div>

            <div className="flex-1">
              <Input inputType={"text"} inputId={"CardCVC"} placeholder="CVC" />
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset className="col-span-6">
        <legend className="block text-sm font-medium text-gray-700">
          Billing Address
        </legend>

        <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
          <div>
            <label htmlFor="Country" className="sr-only">
              Country
            </label>

            <select
              id="Country"
              className="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
            >
              <option>Poland</option>
              <option>Germany</option>
            </select>
          </div>

          <div>
            <Input
              inputType={"text"}
              inputId={"PostalCode"}
              placeholder="ZIP/Post Code"
            />
          </div>
        </div>
      </fieldset>

      <div className="col-span-6">
        <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
          Pay Now
        </button>
      </div>
    </form>
  );
};
