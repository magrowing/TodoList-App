import { create } from 'zustand';

import { ModalState,} from '../types';


export const useModelStore = create<ModalState>()((set) => ({
  isOpenModal : false, 
  onToggle : (bol) => set(() => ({ isOpenModal : !bol }))
}))