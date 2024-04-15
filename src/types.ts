export type TodoItemType = {
  id  : string; 
  title : string,
  stats : string, 
  date : number,
}


export interface TodoState {
  todoItems: TodoItemType[];
  onCreate : (item : {title : string, stats : string }) => void;
  onDelete : (targetId : string) => void;
}