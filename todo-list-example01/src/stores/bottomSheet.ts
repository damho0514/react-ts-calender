import { atom } from 'recoil';
import { BottomSheet } from '../interfaces/BottomSheet';

export const bottomSheetState = atom<BottomSheet>({
  key: 'bottomSheet',
  default: { selectedItem: null, isOpen: false },
});
