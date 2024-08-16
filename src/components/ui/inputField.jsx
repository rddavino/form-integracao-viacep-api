import React from "react";
import { useFormContext } from "react-hook-form";

const InputField = ({ type, fieldName, placeholder, disabled }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <input
      className={`w-full bg-stone-700 pl-3 pr-3 h-12 text-white rounded-md border-none font-bold
        ${disabled ? "bg-opacity-20 text-opacity-30" : ""}`}
      type={type}
      placeholder={placeholder}
      {...register(`${fieldName}`)}
      disabled={disabled === true ? true : false}
    />
  );
};

export default InputField;
