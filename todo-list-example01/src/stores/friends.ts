import { atom, selectorFamily } from 'recoil';
import { IFriend } from '../features/interfaces/IFriends';

const initialState: IFriend[] = [
  {
    userId: 'user1',
    name: '담호',
    profileImage: 'https://i.ibb.co/MgmDcz1/1021805078815985664.webp',
    statusMessage: '나는 담호담',
  },
  {
    userId: 'user2',
    name: '은지',
    profileImage:
      'https://i.ibb.co/dmxdSrf/88cc8c7be1594a83bbf7e39dbf21d5de.webp',
    statusMessage: '나는 치타다',
  },
];

export const friendsState = atom<IFriend[]>({
  key: 'friends',
  default: initialState,
});

export const selectUserById = selectorFamily<IFriend[], string>({
  key: 'selectUserById',
  get:
    (userId: string) =>
    ({ get }) =>
      get(friendsState).filter((friend) => friend.userId === userId),
});
