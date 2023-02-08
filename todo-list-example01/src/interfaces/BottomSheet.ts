import { TodoItems } from './TodoItem';

export interface BottomSheet {
  selectedItem: TodoItems | null;
  isOpen: boolean;
}
