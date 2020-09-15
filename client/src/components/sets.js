import React,{useContext} from 'react';
import {setContext} from '../context/sets'


const SetDisplay = ()=>{

const {sets} = useContext(setContext)

    return(
        <h1>
        {sets}
        </h1>
    )
}
export default SetDisplay
