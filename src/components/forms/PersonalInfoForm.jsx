import React from "react";
import { useFormContext } from "react-hook-form";
import InputField from "../ui/inputField";
import ErrorMessage from "../ui/errorMessage";

const PersonalInfoForm = () => {
//   const {
//     formState: { errors },
//   } = useFormContext();

  return (
    <div className="flex flex-col gap-5 mb-5">
      <div>
        <InputField
          type="text"
          fieldName="firstName"
          placeholder="Digite o seu nome"
          disabled={false}
        />
        <ErrorMessage fieldName="firstName"/>
      </div>

      <div>
        <InputField
          type="text"
          fieldName="lastName"
          placeholder="Digite o seu sobrenome"
          disabled={false}
        />
        <ErrorMessage fieldName="lastName"/>
        
      </div>

      <div>
        <InputField
          type="email"
          fieldName="email"
          placeholder="Digite o seu email"
          disabled={false}
        />
        <ErrorMessage fieldName="email"/>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
