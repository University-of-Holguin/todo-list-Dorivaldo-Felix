import React, { useState } from "react";

const Tarea = (props) => {
    const [modoEdit, setModoEdit] = useState(false);
    const [editText, setEditText] = useState("");

    const editar = () => {
        setModoEdit(true);
    }

    const manejarEdit = (event) => {
        setEditText(event.target.value);
    }

    const submitEdit = (event) => {
        event.preventDefault();
       props.editar(props.id, editText);
       setEditText("");
       setModoEdit(false);
    }

    const borrarTarea = () => {
        props.borrar(props.id);
    }
    return (
        <div>
            {
                !modoEdit ?

                    <div className="tarea">
                        <span>{props.tarea}</span>
                        <button className="btn ir"  onClick={editar}>Editar</button>
                        <button className="btn ir" onClick={borrarTarea}>Borrar</button>
                    </div>
                    :
                    <form className="formEdit" onSubmit={submitEdit}>
                         <div className="form-group row">
                        <input value={editText } onChange={manejarEdit} className="form-control" />
                        <button className="btn ir">Guardar</button>
                        </div>
                    </form>
            }

        </div>
    )

}
export default Tarea;