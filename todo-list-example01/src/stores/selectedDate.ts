import dayjs from 'dayjs';
import { atom } from 'recoil';

export const selectedDateState = atom<string>({
  key: 'selectedDate',
  default: dayjs().format('MM/DD/YY'),
});
