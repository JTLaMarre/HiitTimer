import React,{createContext,useState} from 'react';

export const  secsContext = createContext();

const SecsContextProvider = (props) => {
    
    const[secs, setSecs]=useState(0)

    

    return(
        <secsContext.Provider value={{secs , setSecs}}>

        {props.children}

        </secsContext.Provider>
     )
    }
    
    export default SecsContextProvider