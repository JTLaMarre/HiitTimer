import React,{useContext,useState} from 'react';
import {setContext} from '../context/sets'


const SetDisplay = ()=>{

const {sets} = useContext(setContext);

    return(
        <h1>
        {`${sets}Sets Remaining`}
        </h1>
    )
}
export default SetDisplay
