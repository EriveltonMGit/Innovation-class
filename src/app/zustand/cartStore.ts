import { create } from 'zustand';
import { Produto } from '../types/produto';

type CartStore = {
  cartItems: Produto[];
  addToCart: (item: Produto) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
}));
