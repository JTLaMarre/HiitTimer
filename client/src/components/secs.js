import React,{useContext} from 'react';
import {secsContext} from '../context/setSecs'


const SecsDisplay = ()=>{

const {secs} = useContext(secsContext)

    return(
        <h1>
        {`${secs}Secs`}
        </h1>
    )
}
export default SecsDisplay