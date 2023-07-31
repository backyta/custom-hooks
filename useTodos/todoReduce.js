

export const todoReducer = ( initialState = [], action ) =>{

    switch ( action.type ) {
        case '[TODO] Add Todo': //* tendra este type
               return [ ...initialState, action.payload ];

        case '[TODO] Remove Todo': //* tendra este type
               return  initialState.filter( todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                
                if (todo.id === action.payload) {
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo
            })
            
        default:
            return initialState
            
    }
}

//* Cuando se esta pendiente de realizar algo lo mejor es que se lanze un throw new error
//* Hay veces en que el state sera un array o un objeto, tenemos que trataer de evitar mutar los array, 
//* evitemos usar el push, en su lugar podemos usar el map o el filter que regresan un nuevo array