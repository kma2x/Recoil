import { selector } from 'recoil';
import { todoListState } from './state'

export const todoListCount = selector({
    key: 'todoListCount',
    get: ({ get }) => {
        const todoList = get(todoListState)
        return todoList.length;
    },
});