import { create } from 'zustand';

import { TodoState } from '../types';


export const useTodoStore = create<TodoState>()((set) => ({
  todoItems : [], 
  onCreate : (newItem) => set((state) => ({todoItems : [newItem,...state.todoItems ]})),
  onDelete : (targetId) => set((state) => ({todoItems : state.todoItems.filter((item) => item.id !== targetId )})), 
}))

