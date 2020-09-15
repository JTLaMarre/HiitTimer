import React,{createContext,useState} from 'react';

export const  TimeContext = createContext();

const TimeContextProvider = (props) => {
    
    const[time, setTime]=useState(0)

    

    return(
        <TimeContext.Provider value={{time , setTime}}>

        {props.children}

        </TimeContext.Provider>
     )
    }
    
    export default TimeContextProvider