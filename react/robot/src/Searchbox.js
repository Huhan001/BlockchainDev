import React from "react";
import './index.css'
//import {robots} from "./robots";



// upon creating a state you must return to using a class.


const Searchbox =  ({searchfiled,searchChange}) => {
    return (
        <div className='pa2'>
        <input
            type='search'
            placeholder='search robots'
            className='tc pa3 ba b--green bg-lightest-blue'
            onChange={searchChange}/>
        </div>
    )
}

export default Searchbox