import React,{useContext,useState,useEffect} from 'react';
import {TimeContext} from '../context/time';
import './components.css'


const TimeDisplay = ()=>{

const {time} = useContext(TimeContext)
const minutes =Math.floor(time/60 )
const seconds =Math.floor(time%60)
const [underTen ,setUnderTen]= useState(false)


function getFormattedSeconds() {
  
    if (seconds < 10) {
      setUnderTen(true)
    } else{
      setUnderTen(false)
    }
  
  }

  useEffect(()=>{
      getFormattedSeconds()
  },[time])


    return(
        <h1 id="timer">
        {minutes}:{underTen ? "0"+seconds:seconds}
        </h1>
    )
}
export default TimeDisplay
