import React, { useState } from "react";

import './styles.scss';

const Input = (props) => {
    const [size] = useState(props.size);
    const [error] = useState(props.error);
    // const [shadow] = useState(props.shadow);
    const [disabled] = useState(props.isDisabled);
    const [startIcon] = useState(props.startIcon);
    const [endIcon] = useState(props.endIcon);
    let errorclass;
    if (error) {
        console.log('error', error)
        errorclass = "error"
    }


    return (
        <div className="inputContainer">
            <label htmlFor="input-text" className={`label label-${errorclass}`}>Label</label>
            <input
                className={`input input-${errorclass}`}
                type="text"
                id="input-text"
                placeholder="Placeholder"
                name="nom"
                />
        </div>
    )
}

export default Input;