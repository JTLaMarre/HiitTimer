import React,{useContext} from 'react';
import {minContext} from '../context/min'


const MinDisplay = ()=>{

const {min} = useContext(minContext)

    return(
        <h1>
        {`${min}Mins`}
        </h1>
    )
}
export default MinDisplay