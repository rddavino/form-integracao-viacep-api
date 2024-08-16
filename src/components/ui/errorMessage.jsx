import React from "react";
import { useFormContext } from "react-hook-form";

const ErrorMessage = ({ fieldName }) => {
  const {
    formState: { errors }
  } = useFormContext();

  return (
    errors[fieldName] && (
      <p className="text-red-300 text-sm p-0 m-0">
        {errors[fieldName].message}
      </p>
    )
  );
};

export default ErrorMessage;
