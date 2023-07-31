/* eslint-disable no-unused-vars */
import { useState } from "react"
import PropTypes from 'prop-types';

export const useCounter = ( initialValue = 0 ) =>{

    const [ counter, setCounter ] = useState( initialValue );

    const increment = ( value = 1 ) =>{
        setCounter( (current) => current + value);
        // console.log(counter);
    }

    const decrement = ( value = 1) =>{
        if (counter === 0) return;
        setCounter( (current) => current - value);
        // console.log(counter);
    }

    const reset = () =>{
        setCounter( initialValue );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setCounter( +event.target[0].value);
        
    }

    return{
        counter: counter,
        increment: increment,
        decrement,
        reset,
        onSubmit,
    }
}

useCounter.propTypes = {
    initialValue: PropTypes.number.isRequired,
    
}

//? Aqui exponemos los metodos del Hook

//* Tener cuidado con el [object Object], esto es la representacion string de un objeto {}
//* al no enviar el parametro value desde el componente lo que nos imprime y setea es el evento del click
//* Por eso sale el [object Object], hay que enviar el value para que no presente este error.