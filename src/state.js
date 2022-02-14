import { atom } from "recoil";

const todoList = JSON.parse(localStorage.getItem('arrTodoList'));

export const todoListState = atom({
    key: "todoListState",
    default: todoList ?? [],
});


