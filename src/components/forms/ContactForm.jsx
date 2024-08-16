import * as Yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AddressForm from "./AddressForm";
import PersonalInfoForm from "./PersonalInfoForm";
import Button from "../ui/button";

const validations = Yup.object().shape({
  firstName: Yup.string()
    .max(30, "Nome muito grande")
    .required("Nome é obrigatório"),
  lastName: Yup.string()
    .max(50, "Sobre nome muito grande")
    .required("Sobrenome é obrigatório"),
  email: Yup.string()
    .max(50, "Email muito grande")
    .email("Email inválido")
    .required("Email é obrigatório"),
  cep: Yup.string()
    .max(8, "Tamanho máximo 8 dígitos")
    .required("Cep é obrigatório"),
  logradouro: Yup.string().required("Logradouro é obrigatório"),
  bairro: Yup.string().required("Bairro é obrigatório"),
  localidade: Yup.string().required("Localidade é obrigatório"),
});

function ContactForm() {
  const methods = useForm({
    resolver: yupResolver(validations),
    mode: "onChange",
  });

  const { reset } = methods;

  const onSubmit = (data) => {
    console.log(data);
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

  return (
    <>
      <div className="p-5 max-w-md ">
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
    </>
  );
}

export default ContactForm;
