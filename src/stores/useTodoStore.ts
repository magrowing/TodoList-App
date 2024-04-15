import { create } from 'zustand';

import { TodoState } from '../types';


export const useTodoStore = create<TodoState>()((set) => ({
  title: '',
  stats: 'incomplete',
  isTargetId : '',
  todoItems : [], 
  onCreate : (todo) => set((state) => ({todoItems : [ {
    id: crypto.randomUUID(),
    title : todo.title,
    stats : todo.stats,
    date: new Date().getTime(),
  },...state.todoItems ]})),
  onDelete : (targetId) => set((state) => ({todoItems : 
    state.todoItems.filter((item) => item.id !== targetId )}
  )),
  onUpdate : (targetId,todo) => set((state) => (
    {
      todoItems : state.todoItems.map((item) => item.id ===  targetId 
      ? { ...item , title : todo.title , stats : todo.stats } 
      : item ),
    }
  )),
  onUpdateTargetId : (targetId) => set((state) => ({
    isTargetId  : targetId,
    title : targetId !== '' 
    ? state.todoItems.filter((item) => item.id === targetId)[0].title 
    : '',
    stats : targetId !== '' 
    ? state.todoItems.filter((item) => item.id === targetId)[0].stats 
    : 'incomplete',
  })),
  onDone : (targetId, stats) => set((state) => ({
    todoItems : state.todoItems.map((item) => item.id ===  targetId 
    ? { ...item , stats : stats === 'incomplete' ? 'completed' : 'incomplete' } 
    : item ),
  })),

  onFilterChange : (target) => set((state) => ({
    todoItems : state.todoItems.filter((item) => item.stats === target)
  }) )
}))