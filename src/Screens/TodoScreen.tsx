import React, { useState } from 'react';
import Todo from '../Components/Todo'
const TodoScreen = () => {
    const [todos, setTodos] = useState("");
    const [list, setList] = useState<string[]>([]);
    const [editTodoIndex, setEditTodoIndex] = useState<null | number>(null);
    const [editText, setEditText] = useState<string>("")
    const handleAddTodo = () => {
        if (todos.trim() === "")
            return
        setList([...list, todos]);
        setTodos("");
    }
    const deleteTodo = (index: number) => {
        const newList = list.filter((_, i) => i !== index);
        setList(newList);
    }
    const startEdit = (index: number) => {
        setEditTodoIndex(index);
        setEditText(list[index])
    }
    return (
        <>
            <Todo
                todos={todos}
                handleAddTodo={handleAddTodo}
                setTodos={setTodos}
                list={list}
                deleteTodo={deleteTodo}
                startEdit={startEdit}
            />
        </>
    )
}
export default TodoScreen;