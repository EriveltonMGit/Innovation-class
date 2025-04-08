// src/store/cartStore.ts
import { create } from 'zustand';

type Produto = {
  id: number;
  nome: string;
  preco: number;
};

type CartState = {
  items: Produto[];
  addItem: (item: Produto) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (item) => {
    set((state) => ({
      items: [...state.items, item],
    }));
  },
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
  clearCart: () => {
    set({ items: [] });
  },
  getItemCount: () => get().items.length,
}));
