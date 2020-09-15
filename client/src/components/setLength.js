import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useContext} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {secsContext} from '../context/setSecs'


const SetLength = () => {

    const nums = [10,15,20,25,30,35,40,45,50,60,90,120]
    const {setSecs} =useContext(secsContext)
    const howLong = (num) => {
        setSecs(num)
    }
    
    return (
        
            <DropdownButton id="dropdown-item-button" title="Set Length" >
            {nums.map((num)=>{
                return(
                <Dropdown.Item as="button" onClick={()=>{howLong(num)}}>{`${num}secs`}</Dropdown.Item>
                )})}
            </DropdownButton>
        
    )
}
export default SetLength