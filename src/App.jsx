import React, {useState} from "react";
import ToDoList from "./ToDoList";
import Particle from "./particle";

const App = () => {

    const [inputList,setInputList]= useState("");
    const [items,setItems]=useState([]);

    const itemEvent=(event)=>{
        setInputList(event.target.value) ;
    }

    const listOfItems=()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList]
        });
    
        setInputList("");
    };

    const deleteItems=(id)=>{
       setItems((oldItems)=>{
        return oldItems.filter((arrElement,index)=>{
            return index !==id;
        })
       }) 
    };

    return (
        <>
        <Particle/>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>Todo-List</h1>
                    <br />
                    <div className="inner_div">
                        <input type="text" placeholder="Add a items" onChange={itemEvent} value={inputList} />
                        <button onClick={listOfItems}> Add </button>
                    </div>

                    <ol>
                        {items.map((itemval,index)=>{
                            return <ToDoList 
                            key={index} 
                            text={itemval} 
                            id={index}
                            onSelect={deleteItems}
                            />
                        })}
                            
                    </ol>
                </div>
            </div>
        </>
    )
};

export default App;