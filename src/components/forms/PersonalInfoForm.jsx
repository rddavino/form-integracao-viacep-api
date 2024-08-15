import React from 'react';
import {useFormContext } from "react-hook-form"

const PersonalInfoForm = () => {  

    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <div>
                <label htmlFor="firstName">Nome</label>
                <input type='text' {...register("firstName")}/>
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <div>
                <label htmlFor="lastName">Sobrenome</label>
                <input type='text' {...register("lastName")}/>
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type='email' {...register("email")}/>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
        </div>
    )
}

export default PersonalInfoForm;