import { useState } from 'react';

const useInput = (validateInputHandler, initialValue = '') => {
    const [inputValue, setInputValue] = useState(initialValue);
    const [isTouched, setIsTouched] = useState(false);
    
    //this should be a boolean
    const valueIsValid = validateInputHandler(inputValue);
    
    const hasError = valueIsValid === false && isTouched;
    
    const valueChangeHandler = (event) => {
        setInputValue(event.target.value);
    }
    
    const inputBlurHandler = () => {
        setIsTouched(true);
    }
    
    const reset = () => {
        setInputValue('')
        setIsTouched(false)
    }
    
    return {
        value: inputValue,
        isValid: valueIsValid,
        hasError,
        reset,
        onChangeHandler: valueChangeHandler,
        onBlurHandler: inputBlurHandler
    }
    
}

export default useInput;