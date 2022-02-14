import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../state';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

const TodoItem = (todo) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem.id === todo.id);

  const editItemText = ({target: {value}}) => {
    const newList = replaceItemAtIndex(todoList, index, {
      id: new Date().toLocaleString(),
      task: value,
    });
    localStorage.setItem('arrTodoList', JSON.stringify(newList));
    setTodoList(newList);
  };

  const deleteTodoItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    let todoListLocal = JSON.parse(localStorage.getItem('arrTodoList'));
    todoListLocal = removeItemAtIndex(todoListLocal, index);
    localStorage.setItem('arrTodoList', JSON.stringify(todoListLocal));
    setTodoList(newList);
  };

  return (
    
    <li>      
      <span>{ todo.task }</span>
      <span>{ todo.id }</span>
      <Link to={ todo.task }> Detail</Link>
      <div>
      <Popup
          trigger={<button className="button"> Edit </button>}
          modal
          nested
        >
          {close => (
            <div className="modal">
              <div className="content">
                <h2>Change TaskName</h2>
                <h1>{todo.task}</h1>
                <input type="text" value={todo.task} onChange={editItemText} />
              </div>
                
                <button
                  className="button"
                  onClick={() => {
                    close();
                  }}
                >
                  Update
                </button>
            </div>
          )}
        </Popup>
        <button onClick={ deleteTodoItem }> Delete </button>
      </div>
    </li>
  );
};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;
