export const validateUsername = (name) => {
    const regex = /^\S{3,8}$/

    return regex.test(name)
}

export const validateNameCreatorMessage = 'The username must contain between 3 and 8 characters, without spaces'