import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { selectedDateState } from '../../../stores/selectedDate';
import left from '../../assets/images/calenderLeft.png';
import right from '../../assets/images/calenderRight.png';

export const Calender = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const splited = selectedDate.split('/');
  const days = ['일', '월', '화', '수', '목', '금', '토'];

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
        <Board></Board>
      </Days>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(100% + 28px);
  border: 1px solid black;
  transform: translate3d(-14px 0, 0);
  margin-top: 16px;
`;
const Head = styled.div``;
const Days = styled.div``;
const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
