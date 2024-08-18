import { useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Validations from "../../validations/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import AddressForm from "./AddressForm";
import PersonalInfoForm from "./PersonalInfoForm";
import Button from "../ui/button";
import SuccessDialogBox from "../ui/SuccessDialogBox";

function ContactForm() {
  const methods = useForm({
    resolver: yupResolver(Validations),
    mode: "onChange",
  });
  const { reset } = methods;
  const modalRef = useRef();
  const onReset = () => {
    reset({
      firstName: "",
      lastName: "",
      cpf: "",
      email: "",
      cep: "",
      logradouro: "",
      bairro: "",
      localidade: "",
    });
  };
  const dialogBoxHeader =
    "Você está um passo mais próximo de realizar seu sonho!";
  const dialogBoxText = "Suas informações foram enviadas com sucesso.";

  const onSubmit = (data) => {
    console.log(data);

    if (modalRef.current) {
      modalRef.current.open();
    }
    onReset();
  };

  return (
    <>
      <SuccessDialogBox
        ref={modalRef}
        dialogBoxHeader={dialogBoxHeader}
        dialogBoxText={dialogBoxText}
      />
      <div className="flex justify-center align-middle">
        <div className="max-w-sm sm:px-5 my-10">
          <p className="text-white mb-5 font-bold text-center">
            O Minha Casa Minha Vida facilita a conquista do seu apartamento! Dê
            o primeiro passo para sair do aluguel!
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
