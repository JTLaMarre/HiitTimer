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
const{min,setMin } = useContext(minContext)
const [intTime, setIntTime]= useState(0)
const[rest,setRest] = useState(false)
const[start,setStart] = useState(false)

const Begin =()=>{
    if (start===false){
        setStart(true)
        Start()
    }
    if(start===true){
        console.log("timer started already wait for finish")
    }
}

const Start =()=>{
    if(sets>0){
        setRest(false)
        setTime(secs)
        setIntTime(secs)
    }
    if(sets===0){
        setRest(true)
        setTime(min*60)
        setIntTime(min*60)
        

    }
    console.log(time)
}


useEffect(()=>{
    handleInterval()
},[intTime])



const handleInterval=()=>{
    if(time>0){

        let seconds = intTime;
        
        let HiitInterval = setInterval(function () {
            seconds--;
            setTime(seconds)
            if (seconds === 0) {
                if(rest===false){
                    setSets(sets-1)
                    setIntTime(0)
                    Start()
                }
                if(rest===true){
                    handleRestInterval()
                    
                    
                }
                clearInterval(HiitInterval)
            }
        }, 1000)
    }
}
const handleRestInterval =()=>{

    let seconds = min*60

    let RestInterval = setInterval(function () {
        seconds--;
        setTime(seconds)
        
        setStart(false)

        setTime(0)
        
        clearInterval(RestInterval)
    }, 1000)

}


    return(
        <Button variant="danger" active onClick={Begin}>Start</Button>
    )
}
export default StartTimer