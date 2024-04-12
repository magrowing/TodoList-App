export type TodoItemType = {
  id  : string; 
  title : string,
  stats : string, 
  date : number,
}


export interface TodoState {
  todoItems: TodoItemType[];
  onCreate : (newItem : TodoItemType) => void;
  onDelete : (targetId : string) => void;
}