import React,{useContext} from 'react';
import {TimeContext} from '../context/time';
import Button from 'react-bootstrap/Button';

const StartTimer = ()=>{

const{time , setTime} = useContext(TimeContext)

const Start =()=>{
    console.log(time)
}
    return(
        <Button variant="danger" active onClick={Start}>Start</Button>
    )
}
export default StartTimer