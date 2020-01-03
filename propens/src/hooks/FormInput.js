import {useState} from 'react';


export const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChanges = e => {
        e.preventDefault();
        setValue(e.target.value);
        console.log(value);
    }
    return [value, handleChanges];
}
