import React,{createContext,useState} from 'react';

export const  setContext = createContext();

const SetsContextProvider = (props) => {
    
    const[sets, setSets]=useState(0)

    

    return(
        <setContext.Provider value={{sets , setSets}}>

        {props.children}

        </setContext.Provider>
     )
    }
    
    export default SetsContextProvider