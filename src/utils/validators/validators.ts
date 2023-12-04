export const requiredField = (value: undefined | string) => {
    if (value) return undefined
    return "Required Field"
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}