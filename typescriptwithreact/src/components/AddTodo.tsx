import React,{ useRef } from "react";

type newTodoProps ={
    onAddTodo:(text:string) =>void;
} 
const AddTodo:React.FC<newTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText)
    }
    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" placeholder='add todo' ref={textInputRef} />
            </div>
            <button type='submit'>ADD TODO</button>
        </form>
    );
}

export default AddTodo;