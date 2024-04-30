import { useState } from 'react';
import { useTask } from '../shared/hooks';
import { Input } from "./Input" 
import {
    validateNameCreatorMessage,
    validateNameMessage,
    validateUsername,
    descriptionValidationMessage

  } from "../shared/validators";



export const AddTask = () => {
    const { addTask, isLoading } = useTask();

    const [formState, setFormState] = useState({
        name: {
            value: '',
            isValid: false,
            showError: false
        },
        description: {
            value: '',
            isValid: false,
            showError: false
        },
        startDate: {
            value: '',
            isValid: false,
            showError: false
        },
        endDate: {
            value: '',
            isValid: false,
            showError: false
        },
        creator_name: {
            value: '',
            isValid: false,
            showError: false
        }
    });

  

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'name':
                isValid = value.length > 0;
                break;
            case 'description':
                isValid = value.length > 0;
                break;
            case 'startDate':
                isValid = value.length > 0;
                break;
            case 'endDate':
                isValid = value.length > 0;
                break;
            case 'creator_name':
                isValid = value.length > 0;
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleAddTask = async (event) => {
        event.preventDefault();
        const response = await addTask(formState.name.value, formState.description.value, formState.startDate.value, formState.endDate.value, formState.creator_name.value);
        window.location.reload();

    }

    const isSubmitButtonDisabled = isLoading ||
     !formState.name.isValid ||
     !formState.description.isValid ||
      !formState.startDate.isValid ||
       !formState.endDate.isValid ||
        !formState.creator_name.isValid;

    return (
        <div className="add-task-container">
            <form className="add-task-form">
                <Input
                    field='name'
                    label='Name task'
                    value={formState.name.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <Input
                    field='description'
                    label='Description task'
                    value={formState.description.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <Input
                    field='fechaInicio'
                    label='Start date'
                    value={formState.startDate.value}
                    onChangeHandler={handleInputValueChange}
                    type='date'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <Input
                    field='fechaCierre'
                    label='End Date'
                    value={formState.endDate.value}
                    onChangeHandler={handleInputValueChange}
                    type='date'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <Input
                    field='creador'
                    label='Name the Creator'
                    value={formState.creator_name.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    className="input-field"
                />
                <br />
                <br />
                <div className="button-container">
                    <button className="add-task-bt" onClick={handleAddTask} disabled={isSubmitButtonDisabled}>
                        Agregar Tarea
                    </button>
                    <button className="cancel-task-bt" onClick={() => window.location.href = '/dashboard'}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}