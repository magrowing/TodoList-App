import { create } from 'zustand';

import { TodoItemType, TodoState } from '../types';

const getInitialTodoItems = () => {
  const localTodoItems = localStorage.getItem('todoItems'); 

  if(localTodoItems){
    return JSON.parse(localTodoItems);
  }

  localStorage.setItem('todoItems', JSON.stringify([])); 
  return []; 
}

const setLocalStorage = (todoList : TodoItemType[]) => {
  localStorage.setItem('todoItems', JSON.stringify(todoList));
}

export const useTodoStore = create<TodoState>()((set,get) => ({
  title: '',
  stats: 'incomplete',
  isTargetId : '',
  todoItems : getInitialTodoItems(),
  onCreate : (todo) => {
    set((state) => ({ todoItems : [ {
      id: crypto.randomUUID(),
      title : todo.title,
      stats : todo.stats,
      date: new Date().getTime(),
    },...state.todoItems ]}
    )); 
    setLocalStorage(get().todoItems);
  },
  onDelete : (targetId) => {
    set((state) => ({todoItems : 
    state.todoItems.filter((item) => item.id !== targetId )}
    ));
    setLocalStorage(get().todoItems);
  },
  onUpdate : (targetId,todo) => {
    set((state) => ({
      todoItems : state.todoItems.map((item) => item.id ===  targetId 
      ? { ...item , title : todo.title , stats : todo.stats } 
      : item ),
    })); 
    setLocalStorage(get().todoItems);
  },
  onUpdateTargetId : (targetId) => {
    const match = get().todoItems.filter((item) => item.id === targetId)[0];
    set(() => ({
    isTargetId  : targetId,
    title : targetId !== '' ? match.title : '',
    stats : targetId !== '' ? match.stats : 'incomplete',
    }));
    setLocalStorage(get().todoItems);
  },
  onDone : (targetId, stats) => {
    set((state) => ({
    todoItems : state.todoItems.map((item) => item.id ===  targetId 
    ? { ...item , stats : stats === 'incomplete' ? 'completed' : 'incomplete' } 
    : item ),
    })); 
    setLocalStorage(get().todoItems);
  },
  onFilterChange : (target) => {
    const localTodoItems = localStorage.getItem('todoItems');
    const getTodoItems : TodoItemType[] = localTodoItems && JSON.parse(localTodoItems)
    set(() => ({
      todoItems : target == 'all' ? getTodoItems : getTodoItems.filter((item) => item.stats === target)
    }))
  },
}))