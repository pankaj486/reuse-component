import React, {useState} from "react"


export const Toggle = () => {

    const [isToggle, setIsToggle] = useState(false);

    const toggleStatus = () => {
        setIsToggle((prev) => !prev);
    }

    return(
        {isToggle, toggleStatus}
    );
}