import React from 'react';

interface TodoListProps {
    items:{id:number, text:string}[]; 
    onDeleteTodo:(id:number)=>void;
 }
const Todo:React.FC<TodoListProps> = (props) => {
   
    return (
        <ul>
            {
                props.items.map(todo => <li key={todo.id}>
                    <span>{"Title : "+todo.text}</span>
                    <button onClick={()=>props.onDeleteTodo(todo.id)}>DELETE</button>
                </li>)
            }
        </ul>
    );
}

export default Todo;