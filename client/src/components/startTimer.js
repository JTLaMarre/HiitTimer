import React,{useContext} from 'react';
import {TimeContext} from '../context/time';
import Button from 'react-bootstrap/Button';

const StartTimer = ()=>{

const{time , setTime} = useContext(TimeContext)

    return(
        <Button variant="danger">Start</Button>
    )
}
export default StartTimer