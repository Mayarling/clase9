import React, {useRef} from "react";
import actualizarResultado from "../../redux/store/Resultado/action";
import { connect } from "react-redux";

//siempre al iniciar lo que debemos hacer es recibir por parametro la accion
const Formulario =({actualizarResultado})=>{
    const resultadoRef = useRef(null);//asiganamo la referencia

    const onButtonClick = () =>{
        actualizarResultado(resultadoRef.current.value)
    }

    return(
        <div>
            campo:
            <input type="text" ref={resultadoRef}></input>
            <button onClick={onButtonClick}>Guardar en store</button>
        </div>
    )

}
//se conecta a redux con un valor nullo este como tal nos indica si desea recuperar algo del store
export default connect(null, {actualizarResultado})(Formulario)
