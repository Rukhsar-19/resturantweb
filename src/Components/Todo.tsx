import React from 'react';
import "../Styles/Todo.css";

interface Props {
    todos: string;
    handleAddTodo: () => void;
    setTodos: React.Dispatch<React.SetStateAction<string>>;
    list: string[];
    deleteTodo: (index: number) => void;
    startEdit: (index: number) => void
}

const Todo = (props: Props) => {
    return (
        <>
            <div className="todo_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="topredhead aos-init aos-animate" data-aos="flip-left">
                                <h2 className="redhead">Restaurant Chain</h2>
                                <h2 className="main-heading">Find & Save Restaurant</h2></div>
                            <div className="todo_content">
                                <div className="todo_in_btn">
                                    <input type="text" placeholder='Search Resaturant Name' value={props.todos}
                                        onChange={(e) => props.setTodos(e.target.value)}
                                    />
                                    <button className='greenbtn' onClick={props.handleAddTodo}>Submit</button>
                                </div>
                                <div className='todo__result'>
                                    {props.list.map((item: string, index: number) => (
                                        <div className='todo_response'>
                                            <li key={index}>{item}
                                                <button onClick={() => props.startEdit(index)}>
                                                    <i className="ri-edit-line"></i>
                                                </button>
                                                <button onClick={() => props.deleteTodo(index)}><i className="ri-delete-bin-line"></i></button>
                                            </li>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Todo;