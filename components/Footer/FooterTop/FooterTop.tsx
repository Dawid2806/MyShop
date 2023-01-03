import React from "react";
import { NewsLetterForm } from "../../NewsletterForm/NewsLetterForm";

export const FooterTop = () => {
  return (
    <div className="lg:flex lg:gap-8">
      <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
        <div className="col-span-2">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Get the latest news!
            </h2>

            <p className="mt-6 text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
          <NewsLetterForm />
        </div>
      </div>
    </div>
  );
};
