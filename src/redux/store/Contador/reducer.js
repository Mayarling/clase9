// se importan las constantes con los tipos de las acciones
import {AUMENTAR_CONTADOR,DISMINUIR_CONTADOR} from "./action";

export default function contadorReducer( state={
    contador:0,
    aumentarClicks:0,
    disminuirClicks:0
}, action){
    switch(action.type){
        case AUMENTAR_CONTADOR:
            return {
                ...state, //Retorna todo lo que había en el "store"
                contador:state.contador+1, // modifica el contador
                aumentarClicks: state.aumentarClicks+1 //modificamos el aumentar click
            };
        case DISMINUIR_CONTADOR:
            return{
                ...state,
                contador: state.contador-1,
                disminuirClicks: state.disminuirClicks+1
            };
        default:
            return state;
    }
}
export const selectActiveContador = state => state.contadorReducer.contador;