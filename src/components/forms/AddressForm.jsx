import React, { useEffect, useState, useCallback } from "react";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import InputField from "../ui/inputField";
import ErrorMessage from "../ui/errorMessage";

function AddressForm() {
  const { setValue, watch } = useFormContext();
  const cep = watch("cep") || "";
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const [loading, setLoading] = useState(false);

  const fetchAddressData = useCallback(() => {
    //useCallback: garante que fetchAddressData não seja recriada em todas as renderizações
    axios
      .get(url)
      .then((response) => {
        setValue("logradouro", response.data.logradouro);
        setValue("bairro", response.data.bairro);
        setValue("localidade", response.data.localidade);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "Ocorreu um erro inesperado no envio dos seus dados. Por favor, tente novamente."
        );
      })
      .finally(() => setLoading(false));
  }, [url, setValue]);

  useEffect(() => {
    if (cep.length === 8) {
      setLoading(true);
      fetchAddressData();
    }
  }, [cep, setValue, fetchAddressData]);

  return (
    <div className="flex flex-col gap-5 mb-5">
      <div>
        <InputField
          type="text"
          fieldName="cep"
          placeholder={"Digite o CEP (Apenas os números)"}
          disabled={false}
        />
        <ErrorMessage fieldName="cep" />
        {loading && <p className="text-white">Buscando CEP...</p>}
      </div>

      <div>
        <InputField
          type="text"
          fieldName="logradouro"
          placeholder="Logradouro"
          disabled={true}
        />
        <ErrorMessage fieldName="logradouro" />
      </div>

      <div>
        <InputField
          type="text"
          fieldName="bairro"
          placeholder="Bairro"
          disabled={true}
        />
        <ErrorMessage fieldName="bairro" />
      </div>

      <div>
        <InputField
          type="text"
          fieldName="localidade"
          placeholder="Cidade"
          disabled={true}
        />
        <ErrorMessage fieldName="localidade" />
      </div>
    </div>
  );
}

export default AddressForm;
