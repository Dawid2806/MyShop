import React from "react";

interface InputProps {
  inputType: string;
  InputName?: string;
  inputId: string;
  placeholder?: string;
  col?: number;
}

export const Input = ({
  inputType,
  InputName,
  inputId,
  placeholder,
  col,
}: InputProps) => {
  return (
    <div className={`col-span-${col}`}>
      <label
        htmlFor={inputId}
        className="block text-xs font-medium text-gray-700"
      >
        {InputName}
      </label>

      <input
        type={inputType}
        id="FirstName"
        className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};
