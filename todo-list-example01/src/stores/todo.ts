import { atomFamily, selectorFamily } from 'recoil';
import {
  TodoItem,
  TodoItemKey,
  TodoItemSelectorParms,
} from '../features/interfaces/TodoItem';

const initalState: TodoItem[] = [
  {
    label: '여행 시작하기',
    isDone: true,
    id: '1',
    category: {
      label: '행복지수',
      color: '#ae68ec',
    },
  },
  {
    label: '리액트 해볼까',
    isDone: true,
    id: '1',
    category: {
      label: 'react',
      color: '#ae68ec',
    },
  },
  {
    label: '비투비',
    isDone: true,
    id: '1',
    category: {
      label: '이창섭',
      color: '#dc7b82',
    },
  },
];

export const todoState = atomFamily<TodoItem[], TodoItemKey>({
  key: 'todo',
  default: [],
});

export const todoBycategory = selectorFamily<TodoItem[], TodoItemSelectorParms>(
  {
    key: 'todoSelector',
    get:
      ({ todoItemKey, categoryLabel }: TodoItemSelectorParms) =>
      ({ get }) =>
        get(todoState(todoItemKey)).filter(
          (todo) => todo.category.label === categoryLabel,
        ),
  },
);
