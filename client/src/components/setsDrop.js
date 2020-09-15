import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{useContext} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {setContext} from '../context/sets'


const Sets = () => {

    const nums = [1,2,3,4,5,6,7,8,9,10]
    const {setSets} = useContext(setContext)

    const howManySets = (num) => {
        setSets(num)
        
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