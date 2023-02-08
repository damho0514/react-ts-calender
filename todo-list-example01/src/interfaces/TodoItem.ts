import { Category } from './Category';

export interface TodoItems {
  label: string;
  id: string;
  isDone: boolean;
  category: Category;
}

export type TodoItemKey = [string, string];

export type TodoItemSelectorParms = {
  todoItemKey: TodoItemKey;
  categoryLabel: string;
};
