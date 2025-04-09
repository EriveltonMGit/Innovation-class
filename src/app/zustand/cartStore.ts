import { create } from 'zustand';
import { Produto } from '../types/produto';

type CartStore = {
  cartItems: Produto[];
  addToCart: (item: Produto) => void;
  removeFromCart: (id: number) => void;
  setCartItems: (items: Produto[]) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  setCartItems: (items) => set({ cartItems: items }),
}));
