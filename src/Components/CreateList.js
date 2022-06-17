import React from 'react'



    const CreateList =(props) =>{
        return <li class="list"  id="list" ><div  class="list-items">
        <input id="myCheckBox" type="checkbox" class="checkbox"  >
     </input><span> {props.text}</span></div><button onClick={()=>{props.onSelect(props.id)}} class="deletebtn"><i class="fa fa-trash" ></i></button></ li>

    
}

export default CreateList


