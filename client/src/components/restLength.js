import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const RestLength = () => {

    const nums = [1,2,3,4,5]

    const howLong = (num) => {
        console.log(`${num}min`)
    }
    
    return (
        
            <DropdownButton id="dropdown-item-button-variants-success" variant="success" title="Rest Length" >
            {nums.map((num)=>{
                return(
                <Dropdown.Item as="button" onClick={()=>{howLong(num)}}>{`${num}mins`}</Dropdown.Item>
                )})}
            </DropdownButton>
        
    )
}
export default RestLength