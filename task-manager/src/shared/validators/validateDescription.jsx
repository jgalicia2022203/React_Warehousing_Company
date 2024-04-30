export const validateDescription = (description) => {
    return description.length >= 10 && description.length <= 100
}

export const descriptionValidationMessage = 'La descriptión debe de tener entre 10 y 100 caracteres'