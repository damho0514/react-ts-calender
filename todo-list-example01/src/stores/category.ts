import { atom, selector, selectorFamily } from 'recoil';
import { Category } from '../interfaces/Category';

const initialState: Category[] = [
  {
    label: 'GDSC',
    color: '#ae68ec',
  },
  {
    label: '할일',
    color: '#dc7b82',
  },
  {
    label: '약속',
    color: '#FFDA40',
  },
];

export const categoryState = atom<Category[]>({
  key: 'category',
  default: initialState,
});

export const selectTodoItemCategoryColor = selectorFamily<string[], string[]>({
  key: 'selectTodoItemCategoryColor',
  get:
    (labels: string[]) =>
    ({ get }) => {
      const category = get(categoryState);
      const result = labels.map(
        (label) => category.filter((v) => v.label === label)[0].color,
      );

      return result;
    },
});
