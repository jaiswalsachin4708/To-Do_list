import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const ToDoList = (props) => {

    return (
        <>
            <div className="todolist">
                <li>{props.text}</li>
                <AiFillCloseCircle 
                className="cross" 
                onClick={()=>{
                    props.onSelect(props.id);
                    }}>

                </AiFillCloseCircle>
            </div>
        </>
    );
}
export default ToDoList;