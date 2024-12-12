import { type } from "@testing-library/user-event/dist/type";

export const AUMENTAR_CONTADOR = "AUMENTAR_CONTADOR";
export const DISMINUIR_CONTADOR = "DISMINUIR_CONTADOR";

//Se crean las acciones
export function aumentarContador (valor){
    return {
        type: AUMENTAR_CONTADOR,
        payload: valor
    }
}
export function disminuirContador (valor){
    return {
        type: DISMINUIR_CONTADOR,
        payload: valor
    }
}