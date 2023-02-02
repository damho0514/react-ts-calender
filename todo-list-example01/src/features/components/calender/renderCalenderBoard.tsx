import { ButtonHTMLAttributes } from 'react';
import useTodoInfo from '../../hooks/useTodoInfo';
import dayjs from 'dayjs';
import TodoIconSvg from './TodoIconSvg';
import { ReactComponent as CheckIcon } from '../../assets/vectors/check.svg';

// export const renderCalenderBoard = () => {
//   return <div></div>;
// };

interface CalenderItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  date: string;
  userId: string;
  isSelected: boolean;
}
const CalenderItem = ({
  date,
  userId,
  isSelected,
  ...props
}: CalenderItemProps) => {
  const { isDone, colorSetArr, count } = useTodoInfo(date, userId);
  return (
    <>
      <button {...props}>
        <span className="count">{count !== 0 && count}</span>
        <TodoIconSvg colors={colorSetArr} />
        {isDone && <CheckIcon className="check" />}
      </button>
      <span className="date">{dayjs(date).date()}</span>
    </>
  );
};
