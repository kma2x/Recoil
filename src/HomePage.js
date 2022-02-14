import React from "react";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import Statistic from "./components/Statistic";

const HomePage = () => (
        <div className="App">
            <small>ReactJS + RecoilJS - HoanLN</small>
            <Statistic />
            <TodoAdd />
            <TodoList />
        </div>
);

export default HomePage;