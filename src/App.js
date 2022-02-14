import React from "react";
import { useRecoilValue } from 'recoil';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  HomePage  from './HomePage'
import TodoDetail from "./components/TodoDetail";
import { todoListState } from './state'


const App = () => {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList)
  return (
      <React.StrictMode>
        <BrowserRouter>
            <div className="app">
                <Link to="/"><h3>TodoApp</h3></Link>
    
                <Routes>
                    <Route path="/" element={ <HomePage/> }/>
                    {todoList.map((todo) => { 
                        return <Route path={todo.task} element={
                                    <TodoDetail 
                                      key = { todo.id }
                                      id = { todo.id }
                                      task = { todo.task } />}  
                                      /> 
                      })}
                    
                </Routes>
            </div> 
        </BrowserRouter>
      </React.StrictMode>
    );
  }

export default App;

