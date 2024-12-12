import React from "react";
import { connect } from "react-redux";
import { selectActiveResultado } from "../../redux/store/Resultado/reducer";

const Resultado = ({resultado}) =>
    <div>
        {resultado}
    </div>

const mapStateToProps = state =>{
    return {
        //Descarga en la variable resultado
        //Selecciona el estado actual la cual fue creada en Reducer.js
        resultado:selectActiveResultado(state)
    }
}
//connect Redux
//se incluye el metodo que recupera el valor del store
//conexion al Redux
export default connect(mapStateToProps)(Resultado);