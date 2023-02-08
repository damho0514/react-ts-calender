import React from 'react';
import { useRecoilValue } from 'recoil';
import { Category } from '../../../interfaces/Category';
import { editingState } from '../../../stores/editing';
import { selectedDateState } from '../../../stores/selectedDate';
import selectedProfileState from '../../../stores/selectedProfile';
import { todoBycategory } from '../../../stores/todo';
import CategoryButton from './CategoryButton';
import InputForm from './InputForm';
import TodoItem from './TodoItem';

const FeedItemList = ({ category }: { category: Category }) => {
  const selectedDate = useRecoilValue(selectedDateState);
  const selectedProfile = useRecoilValue(selectedProfileState);
  const todos = useRecoilValue(
    todoBycategory({
      todoItemKey: [selectedDate, selectedProfile],
      categoryLabel: category.label,
    }),
  ) as [];
  const editing = useRecoilValue(editingState);
  return (
    <>
      <CategoryButton category={category} />
      {todos.map((todo: any) =>
        editing === todo?.id ? (
          <InputForm
            category={category}
            initialValue={todo.label}
            id={todo.id}
          />
        ) : (
          <TodoItem item={todo} key={todo.id} />
        ),
      )}
      {editing === category.label && <InputForm category={category} />}
    </>
  );
};

export default FeedItemList;
