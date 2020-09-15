import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const Sets = () => {

    const nums = [1,2,3,4,5,6,7,8,9,10]

    const howManySets = (num) => {
        console.log(num)
    }
    
    return (
        
            <DropdownButton id="dropdown-item-button" title="Sets______" >

            {nums.map((num)=>{
                return(
                <Dropdown.Item as="button" onClick={()=>{howManySets(num)}}>{num}</Dropdown.Item>
                )})}
            </DropdownButton>
        
    )
}
export default Sets