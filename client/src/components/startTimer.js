import React,{useContext,useState,useEffect} from 'react';
import {TimeContext} from '../context/time';
import {setContext} from '../context/sets';
import {secsContext} from '../context/setSecs';
import {minContext} from '../context/min';

import Button from 'react-bootstrap/Button';

const StartTimer = ()=>{

const{time , setTime} = useContext(TimeContext)
const{secs } = useContext(secsContext)
const{sets,setSets } = useContext(setContext)
const{min } = useContext(minContext)
const [intTime, setIntTime]= useState(0)

const Start =()=>{
    if(sets>0){
        setTime(secs)
        setIntTime(secs)
    }
    if(sets===0){
        setTime(min*60)
        setIntTime(min*60)
    }
    console.log(time)
}


useEffect(()=>{
    handleInterval()
},[intTime])

useEffect(()=>{
    Start()
},[sets])

const handleInterval=()=>{
    if(time>0){

        let seconds = intTime;
        
        let HiitInterval = setInterval(function () {
            seconds--;
            setTime(seconds)
            if (seconds === 0) {
                if(sets>0){
                    setSets(sets-1)
                }
                if(sets===0 && min>0){
                    Start()
                }
                clearInterval(HiitInterval)
            }
        }, 1000)
    }
}


    return(
        <Button variant="danger" active onClick={Start}>Start</Button>
    )
}
export default StartTimer