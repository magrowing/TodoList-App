import { create } from 'zustand';

import { TodoState } from '../types';


export const useTodoStore = create<TodoState>()((set) => ({
  todoItems : [], 
  onCreate : (item) => set((state) => ({todoItems : [ {
    id: crypto.randomUUID(),
    title : item.title,
    stats : item.stats,
    date: new Date().getTime(),
  },...state.todoItems ]})),
  onDelete : (targetId) => set((state) => ({todoItems : 
    state.todoItems.filter((item) => item.id !== targetId )}
  )), 
}))

