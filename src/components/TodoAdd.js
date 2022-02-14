import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from "../state";

const TodoAdd = () => {
    const [todoValue, setTodoValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
    const handleTodoValue = (event) => {
        setTodoValue(event.target.value);
    };

    const addItem = () => {
        if (todoValue) {
            setTodoList(todoList => {
                const newTodoList =  [
                    ...todoList,
                    {
                        id: new Date().toLocaleString(),
                        task: todoValue
                    }
                ]
                localStorage.setItem('arrTodoList', JSON.stringify(newTodoList));
                return newTodoList
            })
            setTodoValue("");
        }
    };


    return (
        <form>
            <input type="text" value={todoValue} onChange={handleTodoValue} minLength="4"></input>
            <button type="button" onClick={addItem}>
                Add
            </button>
        </form>
    )
};

export default TodoAdd;