import React, {useState} from 'react';


export const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChanges = e => {
        e.preventDefault();
        console.log(e.target.value);
    }

    return [value, handleChanges];
}
