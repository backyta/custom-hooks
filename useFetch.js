import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError:null
    });

    const getFetch = async () =>{

        try {
            setstate({
                ...state,
                isLoading: true
            });

            const resp = await fetch(url);
            const data =  await resp.json();   
            console.log(data);

            setstate({
                 data: data, //* respuesta json
                 isLoading: false,
                 hasError: null
            });
        } catch (error) {
            setstate({
                ...state,
                isLoading: false,
                hasError: true
            });
        }

    }
    useEffect(() => {
        getFetch();

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);
    
    return {
        data     : state.data,
        isLoading: state.isLoading,
        hasError : state.hasError

    }
}

//? cada vez que el url cambie se dispara el useEffect, si el url es el mismo no hace nada

//* El use efect espera una funcion pura ara hacer la limpieza por lo que no se puede usar el async
//* ya que este retorna una promesa

//* Pirmero el componente se monta y muestra el estado incial del hook, luego se dispara el use fectch
//* que tioene la peticion asincrona, esta tiene dentro otra actualizacion del estado por la cual se 
//* vuelve a renderizar, finalmente otra actualizacion del estado y se imprime. 