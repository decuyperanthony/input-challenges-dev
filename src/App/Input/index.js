import React, { useState } from "react";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import './styles.scss';

const Input = (props) => {
    const [error] = useState(props.error);
    const [size] = useState(props.size);
    const [disabled] = useState(props.disabled);
    const [helpingText] = useState(props.helpingText);
    const [valuePlaceholder] = useState(props.value);
    const [startIcon] = useState(props.startIcon);
    const [endIcon] = useState(props.endIcon);
    const [iconValue] = useState(props.iconValue);
    const [fullWidth] = useState(props.fullWidth);

    //! ERROR
    let errorclass = "";
    if (error) {
        errorclass = "error";
    }
    //! SIZE
    let sizeClass = "";
    if (size) {
        sizeClass = size;
    }

    //! FULL WIDTH
    let fullWidthClass = "";
    if (fullWidth) {
        fullWidthClass = "full-width";
    }
    //! DISABLED
    let disabledclass = "";
    if (disabled) {
        disabledclass = "disabled";
    }
    //! HELPING TEXT
    let helpingTextJSX = "";
    if (helpingText) {
        helpingTextJSX = (
            <label className={`label label-${errorclass}`} style={{fontSize: '0.6em', marginTop: '0.2em'}}>{helpingText}</label>
        )
    }
    //! ICON
    let startIconJSX;
    let inputIconClass = "";
    let paddingPlaceholderIcon;
    let myIconJSX;
    const iconJSX = (myClassName) => {
        switch (iconValue) {
            case "mail":
                myIconJSX = <MailIcon className={myClassName}/>
                break;
            case "phone":
                myIconJSX = <PhoneIcon className={myClassName}/>
                break;
            case "password":
                myIconJSX = <LockIcon className={myClassName}/>
                break;
            default:
                break;
        }
        return(
            <>
            {myIconJSX}
            </>
        )
    }
    if (startIcon) {
        inputIconClass = "input-icons";
        const icon="icon";
        startIconJSX = (iconJSX(icon));
        paddingPlaceholderIcon = "padding-placeholder-icon";
        console.log('paddingPlaceholderIcon', paddingPlaceholderIcon)
    }

    if (endIcon) {
        inputIconClass = "input-icons";
        const icon="icon icon-end";
        // const icon="mail";
        startIconJSX = (iconJSX(icon));
    }

    return (
        <div>
        <form>
        <div className={`form-group ${inputIconClass}`}>
            {helpingTextJSX}
            <input
                className={`input input-${errorclass}
                    ${disabledclass} ${paddingPlaceholderIcon}
                    ${sizeClass} ${fullWidthClass}
                `}
                disabled={disabled}
                type="text"
                placeholder={valuePlaceholder ? valuePlaceholder : "Placeholder"}
                name="nom"
            />
            {startIconJSX}
             <label
                className={`label label-${errorclass}`}
            >
                Label
            </label>
        </div>
        </form>
        </div>
    )
}

export default Input;