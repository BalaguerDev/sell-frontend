import { create } from 'zustand';

const useSidebarStore = create((set) => ({
  // Estado inicial
  isOpen: false,
  selectedItemIndex: null,

  // Acciones
  openSidebar: () => set({ isOpen: true }),
  closeSidebar: () => set({ isOpen: false }),
  setSelectedItem: (index) => set({ selectedItemIndex: index }),
}));

export default useSidebarStore;
