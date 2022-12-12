import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Input, Select } from "./Input";
import { schema } from "./Schema";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  cardNumber: number;
  cardExpiry: number;
  cardCVC: number;
  coutry: string;
  postalCode: string;
};

export const CheckoutForm = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input label="First Name" type="text" name="firstName" />

        <Input label="Last Name" type="text" name="lastName" />
        <Input label="Email" type="Email" name="email" />
        <Input label="Phone" type="tel" name="phone" />

        <fieldset className="col-span-6">
          <legend className="block text-sm font-medium text-gray-700">
            Card Details
          </legend>

          <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
            <div>
              <Input
                type={"text"}
                name={"cardNumber"}
                placeholder="Card Number"
              />
            </div>

            <div className="flex -space-x-px">
              <div className="flex-1">
                <Input
                  type={"text"}
                  name={"cardExpiry"}
                  placeholder="Expiry Date"
                />
              </div>

              <div className="flex-1">
                <Input type={"text"} name={"cardCVC"} placeholder="CVC" />
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
              <Select
                label="Coutry"
                name={"coutry"}
                options={["Poland", "Germany", "England"]}
              />
            </div>

            <div>
              <Input
                type={"text"}
                name={"postalCode"}
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
    </FormProvider>
  );
};
