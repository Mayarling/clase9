// nombrar el metodo de la action
//recibe por parametros lo que se desea modificar
const actualizarResultado = resultado => {
    return {
        //devolvemos un objeto con dos parametros
        //identificador
        type: 'ACTUALIZAR_RESULTADO', //debe ser mayuscula y facil de identificar
        payload: resultado //es el que transmite la informacion al redux
    }
}

export default actualizarResultado;