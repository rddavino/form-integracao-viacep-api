import * as Yup from "yup";
import ValidateCPF from "./cpfValidation";

const Validations = Yup.object().shape({
  firstName: Yup.string()
    .max(30, "Por favor, insira um nome com menos caracteres.")
    .required("Ops! Precisamos saber o seu nome"),
  lastName: Yup.string()
    .max(50, "Por favor, insira um sobrenome com menos caracteres.")
    .required("Ops! Precisamos saber o seu sobrenome"),
  cpf: Yup.string()
    .max(11, "Por favor, insira um CPF com menos caracteres.")
    .test('cpf', 'CPF inválido', (value) =>ValidateCPF(value))
    .required("Ops! Precisamos saber o seu CPF"),
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

export default Validations;
