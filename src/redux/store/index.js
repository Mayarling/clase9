//crear el store 
import {createStore, combineReducers} from 'redux';
import resultadoReducers from './Resultado/reducer';
import contadorReducer from './Contador/reducer';

//Si ocupamos más reducers los vamos incorporando
const myReducers = combineReducers({
    resultadoReducers, 
    contadorReducer
})

export default () => {
    return{
        ...createStore(myReducers,
            //esto nos permite poder ver mis action en la extension de redux devtools
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    }

}