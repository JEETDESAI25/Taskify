import React from "react";
import "./styles.css"
const InputFeild = () => {
    return (
        <form className="inputFeild">
        <input type="input" className="input__box" placeholder="Enter a task" />
        <button className="input_submit" type="submit">
            GO
        </button>

    </form>
    );
};

export default InputFeild;