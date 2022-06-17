import React ,{useState} from 'react'
import CreateList from './CreateList'

function Todoapp() {
            
   const [inputValue,setInputList] =useState("");
   const [items,setItems] =useState([]);
  //  const h2 =document.getElementById('h2');

     const itemEvent =(event)=>{
            setInputList(event.target.value);
     };

        const listOfItems =() => {
           
            setItems((todo)=> [...todo,inputValue]  
              
            );
            setInputList('');
           
        };
        
        // const handleclick = (event) => {
        //   if (event.target.style.textDecoration) {
        //     event.target.style.removeProperty('text-decoration');
        //   } else {
        //     event.target.style.setProperty('text-decoration', 'line-through');
        //   }
        // };

        const deletebtn =(id)=>{
          setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !==id;
            })
        })  


        

        
      
        }

  return (
    <>
    <div>
    <div>
        <h1>All Tasks</h1>
        <div>
                  <input id="input" type="text" name="add" class="textinput" placeholder="Add a new task" value={inputValue} onChange={itemEvent}/>
                  <button id="addbtn" class="button" onClick={listOfItems}>Add</button>
                  <ul id="myList" class="ul">
                   { items.map((itemVal,index) =>{
                       return  <CreateList  
                       key ={index}
                       id={index}
                       text={itemVal}
                       onSelect={deletebtn} 
                      //  onChange={handleclick}
                       
                       />
                    })}
               
        </ul>  
       </div>
    </div>
        <div>
           {items.length === 0 && <h2 id="h2">Seems like a quiet day</h2>}
        </div>
</div>
</>
  )

}

export default Todoapp