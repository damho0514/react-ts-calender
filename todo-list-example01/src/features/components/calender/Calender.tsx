import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { selectedDateState } from '../../../stores/selectedDate';
import left from '../../assets/images/calenderLeft.png';
import right from '../../assets/images/calenderRight.png';
import { useRenderCalenderBoard } from './renderCalenderBoard';
import selectedProfileState from '../../../stores/selectedProfile';

export const Calender = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const selectedProfile = useRecoilValue(selectedProfileState);

  const splited = selectedDate.split('/');
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const handleSelectDate = (v: string) => {
    setSelectedDate(v);
  };

  const handlePrevMonth = useCallback(() => {
    const newDate = dayjs(selectedDate)
      .subtract(1, 'month')
      .endOf('month')
      .format('MM/DD/YY');
    setSelectedDate(newDate);
  }, []);

  const handleNextMonth = useCallback(() => {
    const newDate = dayjs(selectedDate)
      .add(1, 'month')
      .startOf('month')
      .format('MM/DD/YY');
    setSelectedDate(newDate);
  }, []);

  const board = useRenderCalenderBoard(
    selectedDate,
    selectedProfile,
    handleSelectDate,
  );

  return (
    <Wrapper>
      <Head>
        <p>
          20{splited[2]}년 {splited[0]}월
        </p>
        <div>
          <img src={left} onClick={handlePrevMonth} />
          <img src={right} onClick={handleNextMonth} />
        </div>
      </Head>
      <Days>
        {days.map((v) => (
          <div key={v}>{v}</div>
        ))}
        <Board>{board}</Board>
      </Days>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 16px;
  transform: translate3d(-14px, 0, 0);
  width: calc(100% + 28px);
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Head = styled.div`
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  margin: auto 14px;
  margin-bottom: 10px;

  p {
    line-height: 28px;
  }

  img {
    width: 26px;
    margin-left: 8px;
    cursor: pointer;
  }
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  & > div {
    margin: 4px auto;
    font-size: 10px;
  }
`;
