import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReduce"


const init = () =>{
    return JSON.parse( localStorage.getItem('todos') ) || []; //* intenta, si es null devuelve un [] vacio
}

export const UseTodo = () => {
    const [todos, dispatch ] = useReducer(todoReducer, [], init ) 

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))

    }, [todos])

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action )
        // console.log({ todo });
    }

    const handleDeletoTodo = (id) =>{
        dispatch({
            type:'[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) =>{
       
         dispatch({
            type:'[TODO] Toggle Todo',
            payload: id
        })
    }

    const todosCount = () =>{
        return todos.length 
    }

    const penddingTodosCount = () =>{

       return todos.filter(todo => !todo.done).length 
    }
    


     //* Emitimos eventos de onSubmit desde el hijo al padre  

    return {
        todos,
        handleNewTodo,
        handleDeletoTodo,
        handleToggleTodo,
        todosCount, 
        penddingTodosCount
    }
}

//* Con el init nos aseguramos de inicalizar nuestro state con los todos que existen previamente en el 
//* Local storage para no perderlos,//* Funcion que inicaliza nuesteo reducer

//* Solo se dispara la primera vez o cuando se recarga las, demas se todos se contruyen cuando se actualiza
//* ele stado y se barre con el map el nuevo todo y se setea en el localStrage

//* El useEffect se dispara cuando se monta el componente y cuando los todos cambian

//? CONTEXT
//* V aser un contendor de informacion que va estar en un nivel superior, que le va permiit a los componentes
//* hijos de el poder leer y ejecutar metodos que esten dentro de este contex.

//* Por ejemplo tenemos 2 paginas un login y un home page, el login setea el user y cambia el estado
//* del contex que esta en un nivel superior, y luego el homePage leera esta informacion o contex
//* para obtener los ultimos valores actualizados de ese usuario.