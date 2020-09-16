import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {minContext} from '../context/min';



const RestLength = () => {

    const nums = [0,1,2,3,4,5]
    const{setMin}=useContext(minContext)
    const howLong = (num) => {
        setMin(num)
    }
    
    return (
        
            <DropdownButton id="dropdown-item-button-variants-success" className="length" variant="success" title="Rest Length" >
            {nums.map((num)=>{
                return(
                <Dropdown.Item as="button" onClick={()=>{howLong(num)}}>{`${num}mins`}</Dropdown.Item>
                )})}
            </DropdownButton>
        
    )
}
export default RestLength