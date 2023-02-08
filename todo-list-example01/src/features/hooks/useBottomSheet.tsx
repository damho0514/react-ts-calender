import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { TodoItems } from '../../interfaces/TodoItem';
import { bottomSheetState } from '../../stores/bottomSheet';

function useBottomSheet(initial: boolean) {
  const [bottomSheet, setBottomSheet] = useRecoilState(bottomSheetState);
  const { isOpen, selectedItem } = bottomSheet;

  function onOpen(item: TodoItems) {
    setBottomSheet({ selectedItem: item, isOpen: true });
  }
  function onDismiss() {
    setBottomSheet({ selectedItem: null, isOpen: false });
  }

  return { isOpen, selectedItem, onOpen, onDismiss };
}

export default useBottomSheet;
