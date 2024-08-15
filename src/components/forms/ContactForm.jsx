import * as Yup from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AddressForm from "./AddressForm";
import PersonalInfoForm from "./PersonalInfoForm";


const validations = Yup.object().shape({
    firstName: Yup.string().max(30, "Nome muito grande").required("Nome é obrigatório"),
    lastName: Yup.string().max(50, "Sobre nome muito grande").required("Sobrenome é obrigatório"),
    email: Yup.string().max(50, "Email muito grande").email("Email inválido").required("Campo obrigatório"),
    cep: Yup.string().max(8, "Tamanho máximo 8 dígitos").required("Cep é obrigatório"),
    logradouro: Yup.string().required("Logradouro é obrigatório"),
    bairro: Yup.string().required("Bairro é obrigatório"),
    localidade: Yup.string().required("Localidade é obrigatório"),
})


 function ContactForm () {
    const methods = useForm({
        resolver: yupResolver(validations),
        mode: "onChange", 
    });
  
    const { reset } = methods;

    const onSubmit = (data)=> {
        console.log(data)
    }

    const onReset = () => {
        reset({
            firstName:'',
            lastName: '',
            email: '',
            cep: '',
            logradouro: '',
            bairro: '',
            localidade: '',
        });
      };

    return(
        <FormProvider {...methods}>
             <form onSubmit={methods.handleSubmit(onSubmit)}>
                <PersonalInfoForm />
                <AddressForm />
                <button type="button" onClick={onReset}>Limpar</button>
                <button type="submit">Enviar</button>
             </form>
        </FormProvider >
    )
}

export default ContactForm;