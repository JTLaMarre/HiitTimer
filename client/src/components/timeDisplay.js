import React,{useContext} from 'react';
import {TimeContext} from '../context/time';
import './components.css'


const TimeDisplay = ()=>{

const {time} = useContext(TimeContext)

    return(
        <h1 id="timer">
        {time}
        </h1>
    )
}
export default TimeDisplay
