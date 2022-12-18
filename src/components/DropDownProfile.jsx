import React,{useState} from 'react'

function DropDownProfile() {
    const[selects,setSelects]=useState();
    return(
        <div>
        <h1>{selects}</h1>
        <select value={selects} onChange={e=>setSelects(e.target.value)}>
            <option>Python</option>
            <option>HTML</option>
            <option>CSS</option>
        </select>

        </div>
    );
}

export default DropDownProfile
