import React,{createContext,useState} from 'react';

export const  minContext = createContext();

const MinContextProvider = (props) => {
    
    const[min, setMin]=useState(0)

    

    return(
        <minContext.Provider value={{min , setMin}}>

        {props.children}

        </minContext.Provider>
     )
    }
    
    export default MinContextProvider