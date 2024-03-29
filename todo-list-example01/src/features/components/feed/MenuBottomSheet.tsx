import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import styled from 'styled-components';
import edit from '../../assets/images/edit.png';
import bin from '../../assets/images/bin.png';

import { useSetRecoilState } from 'recoil';
import useBottomSheet from '../../hooks/useBottomSheet';
import { editingState } from '../../../stores/editing';
import useHandleTodo from '../../hooks/useHandleTodo';

interface MenuBottomSheetProps {}

const MenuBottomSheet = ({}: MenuBottomSheetProps) => {
  const { isOpen, onDismiss, selectedItem } = useBottomSheet(false);
  const setEditingItem = useSetRecoilState(editingState);
  const { deleteTodo } = useHandleTodo();

  const handleDeleteTodo = () => {
    onDismiss();
    deleteTodo(selectedItem!.id);
  };

  const handleEditTodo = () => {
    onDismiss();
    setEditingItem(selectedItem!.id);
  };

  return (
    <StyledBottomSheet open={isOpen} onDismiss={onDismiss}>
      <Content>
        <h2>{selectedItem?.label}</h2>
        <div>
          <Button onClick={handleEditTodo}>
            <div>
              <img src={edit} />
              <div>수정</div>
            </div>
          </Button>
          <Button onClick={handleDeleteTodo}>
            <div>
              <img src={bin} />
              <div>삭제</div>
            </div>
          </Button>
        </div>
      </Content>
    </StyledBottomSheet>
  );
};

export default MenuBottomSheet;

const StyledBottomSheet = styled(BottomSheet)`
  & > div:nth-child(2) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  padding: 24px;
  h2 {
    font-size: 16px;
    font-weight: 600;
  }

  & > div {
    margin-top: 18px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
  }
`;

const Button = styled.div`
  width: 100%;
  height: 68px;
  background-color: ${({ theme }) => theme.palette.mono.gray_f5};
  border-radius: 6px;
  cursor: pointer;

  img {
    height: 24px;
    width: 24px;
    margin-bottom: 4px;
  }

  font-size: 14px;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
