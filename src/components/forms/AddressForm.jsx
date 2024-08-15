import React, { useEffect, useState, useCallback } from 'react';
import { useFormContext } from "react-hook-form"
import axios from 'axios';

function AddressForm(){

    const { register,setValue, formState: { errors }, watch } = useFormContext();    
    const cep = watch('cep')  || '';
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const [loading, setLoading] = useState(false);
    
    const fetchAddressData = useCallback(() => { //garante que fetchAddressData não seja recriada em todas as renderizações
        axios.get(url)
        .then(
            (response) => {
                setValue('logradouro', response.data.logradouro);
                setValue('bairro', response.data.bairro);
                setValue('localidade', response.data.localidade);
            }
        )
        .catch((error) => {
             // Handle submission error
             console.error('Submission error:', error);
             // Provide user feedback on error
             alert('An error occurred during submission. Please try again.');
         
        })
        .finally(() => setLoading(false));
    },[url,setValue]);

    useEffect(() => {
        if (cep.length === 8) {
            setLoading(true);
          fetchAddressData();
        }
    }, [cep, setValue, fetchAddressData]);

    return (
        <div>
            <div>
                <label htmlFor="cep">CEP</label>
                <input type='text' {...register("cep")}/>
                {errors.cep && <p>{errors.cep.message}</p>}
                {loading && <p>Validando CEP...</p>}
            </div>

            <div>
                <label htmlFor="logradouro">Logradouro</label>
                <input type='text' {...register("logradouro")} disabled/>
                {errors.logradouro && <p>{errors.logradouro.message}</p>}
            </div>

            <div>
                <label htmlFor="bairro">Bairro</label>
                <input type='text' {...register("bairro")} disabled/>
                {errors.bairro && <p>{errors.bairro.message}</p>}
            </div>

            <div>
                <label htmlFor="localidade">localidade</label>
                <input type='type' {...register("localidade")} disabled/>
                {errors.localidade && <p>{errors.localidade.message}</p>}
            </div>
        </div>
    )
}

export default AddressForm;