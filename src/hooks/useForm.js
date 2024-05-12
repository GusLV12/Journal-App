import { useEffect, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setformValidation] = useState({});

    useEffect(() => {
        createValidator
    }, [formState])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidator = () => {
        const formCheckedValues = {}

        for (const formField of Object.keys(formValidations)) {
            const [ fn, errorMessage = 'Este campo es requerido.'] = formValidations[formField];

            formCheckedValues[`${formField} Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setformValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation
    }
}