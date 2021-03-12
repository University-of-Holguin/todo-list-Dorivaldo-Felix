import React, { useState } from 'react';

const TareaForm = (props) => {
    const [inputText, setInputText] = useState("");
    const [validacion, setValidacion] = useState(true);

    const manejarFormulario = (event) => {
        setInputText(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        if (inputText.trim() !== "") {
            props.nuevaTarea(inputText);
            setInputText("");
            setValidacion(true);
        }
        else {
            setValidacion(false);
        }
    }
    return (

        <div>
            

            
            <form className="form" onSubmit={submit}>
                <span>ADICIONAR TAREA</span>
                <div className="form-group row">
                <input value={inputText} onChange={manejarFormulario} className="form-control"/>
               <button className="btn ">ADD</button>
               </div>
            </form>
            {
                !validacion &&
                <div className="validacion">Adicione una tarea porfavor</div>
            }

        </div>

    )

}
export default TareaForm;
