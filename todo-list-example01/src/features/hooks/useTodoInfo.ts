import { useRecoilValue } from 'recoil';
import { todoState } from '../../stores/todo';
import { getStortedArray } from '../../utils/getSoritedArray';

const useTodoInfo = (date: string, userId: string) => {
  const todos = useRecoilValue(todoState([date, userId]));

  const colors = todos
    .filter((todo) => todo.isDone === true)
    .map((done) => done.category.color);
  // TODO: new Set하면 어떤 동작인지
  const colorSet = new Set(getStortedArray(colors));
  // TODO: Arry.from 어떤 메소드 인지.
  const colorSetArr = Array.from(colorSet);

  const count = todos.filter((todo) => !todo.isDone).length;
  const isDone = count === 0 && todos.length !== 0;

  return { count, isDone, colorSetArr };
};

export default useTodoInfo;
