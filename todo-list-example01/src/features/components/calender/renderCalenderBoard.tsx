import dayjs from 'dayjs';
import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import TodoIconSvg from './TodoIconSvg';
import useTodoInfo from './useTodoInfo';
import { ReactComponent as CheckIcon } from '../../assets/vectors/check.svg';

const useRenderCalenderBoard = (
  selectedDay: string,
  selectedProfile: string,
  handleSelectDate: (v: string) => void,
) => {
  const initArr = (firstDay: number, daysInMonth: number) => {
    return Array.from({ length: firstDay + daysInMonth }, (v, i) =>
      i < firstDay
        ? null
        : dayjs(selectedDay)
            .startOf('month')
            .set('date', i - firstDay + 1)
            .format('MM/DD/YY'),
    );
  };

  const [arr, setArr] = useState<(string | null)[]>([null]);

  useEffect(() => {
    const firstDay = dayjs(selectedDay).startOf('month').day();
    const daysInMonth = dayjs(selectedDay).daysInMonth();
    setArr(initArr(firstDay, daysInMonth));
  }, [selectedDay]);

  const content = arr.map((v, i) => (
    <Item key={v ? v.toString() : `${v}${i}`} isSelected={selectedDay === v}>
      {v && ( //TODO
        <CalenderItem
          date={v}
          userId={selectedProfile}
          isSelected={selectedDay === v}
          onClick={() => handleSelectDate(v)}
        />
      )}
    </Item>
  ));

  return content;
};

export default useRenderCalenderBoard;

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
  const { count, colorSetArr, isDone } = useTodoInfo(date, userId);
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

const Item = styled.div<{ isSelected: Boolean }>`
  width: 21px;
  height: 35px;
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  & > button {
    height: 21px;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4px;

    .count {
      position: absolute;
      padding-top: 3px;
      font-size: 13px;
      text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
      font-weight: 700;
    }

    .check {
      position: absolute;
    }
  }

  .date {
    font-weight: 700;
    color: ${({ isSelected }) => (isSelected ? '#000' : '#b6b6b6')};
    ${({ isSelected }) =>
      isSelected
        ? css`
            color: #000;
            font-size: 12px;
            text-decoration: underline;
          `
        : css`
            color: #b6b6b6;
            font-size: 11px;
          `}
  }
`;
