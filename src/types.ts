export type TodoItemType = {
  id  : string; 
  title : string,
  stats : string, 
  date : number,
}


export interface TodoState {
  title: string,
  stats: string,
  isTargetId : string,
  todoItems: TodoItemType[];
  onCreate : (todo : {title : string, stats : string }) => void;
  onDelete : (targetId : string) => void;
  onUpdate : (targetId : string, todo : {title : string, stats : string }) => void;
  onUpdateTargetId : (targetId : string) => void;
  onDone : (targetId : string, stats :string) => void;
  onFilterChange : (target : string) => void; 
}

export interface ModalState {
  isOpenModal : boolean;
  onToggle : (value : boolean) => void;
}