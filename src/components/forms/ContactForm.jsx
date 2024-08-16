import * as Yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AddressForm from "./AddressForm";
import PersonalInfoForm from "./PersonalInfoForm";
import Button from "../ui/button";
import SuccessDialogBox from "../ui/SuccessDialogBox";
import React, { useRef } from 'react';


const validations = Yup.object().shape({
  firstName: Yup.string()
    .max(30, "Por favor, insira um nome com menos caracteres.")
    .required("Ops! Precisamos saber o seu nome"),
  lastName: Yup.string()
    .max(50, "Por favor, insira um sobrenome com menos caracteres.")
    .required("Ops! Precisamos saber o seu sobrenome"),
  email: Yup.string()
    .max(50, "Por favor, insira um email com menos caracteres.")
    .email("Email inválido")
    .required("Ops! Precisamos saber o seu email"),
  cep: Yup.string()
    .max(8, "O valor CEP deve ter no máximo 8 dígitos")
    .required("Ops! Precisamos saber o seu cep"),
  logradouro: Yup.string().required("Ops! Precisamos saber o logradouro"),
  bairro: Yup.string().required("Ops! Precisamos saber o bairro"),
  localidade: Yup.string().required("Ops! Precisamos saber a localidade"),
});

function ContactForm() {
  const methods = useForm({
    resolver: yupResolver(validations),
    mode: "onChange",
  });

  const { reset } = methods;
  const modalRef = useRef();

  const onSubmit = (data, event) => {
    console.log(data);
    event.preventDefault();
    if (modalRef.current) {
      modalRef.current.open();
    }
    onReset();
  };

  const onReset = () => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      cep: "",
      logradouro: "",
      bairro: "",
      localidade: "",
    });
  };  
  const dialogBoxHeader = "Você está um passo mais próximo de realizar seu sonho!"
  const dialogBoxText = "Suas informações foram enviadas com sucesso." 
  return (
    <>
      <SuccessDialogBox ref={modalRef} dialogBoxHeader={dialogBoxHeader} dialogBoxText={dialogBoxText}/>
      <div className="flex justify-center align-middle">
        <div className="max-w-md">
        <p className="text-white mb-5 font-bold text-center">
          O Minha Casa Minha Vida facilita a conquista do seu apartamento! Dê o
          primeiro passo para sair do aluguel!
        </p>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <PersonalInfoForm />
            <AddressForm />
            <Button
              className="w-full 
                        rounded-full
                        bg-yellow-500 
                        h-12 
                        text-center 
                        justify-center
                        text-teal-900 
                        text-base 
                        uppercase
                        font-bold
                        no-underline
                        flex
                        items-center"
              type="submit"
            >
              Enviar
            </Button>
            <Button
              className="w-full 
                        rounded-full
                        bg-none
                        h-12 
                        text-center 
                        justify-center
                        text-slate-100 
                        text-base 
                        uppercase
                        font-bold
                        no-underline
                        flex
                        items-center"
              type="button"
              onClick={onReset}
            >
              Limpar
            </Button>
          </form>
        </FormProvider>
        </div>

      </div>
    </>
  );
}

export default ContactForm;
