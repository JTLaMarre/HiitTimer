import React,{useContext} from 'react';
import {TimeContext} from '../context/time'


const TimeDisplay = ()=>{

const {time} = useContext(TimeContext)

    return(
        <h1>
        {time}
        </h1>
    )
}
export default TimeDisplay
