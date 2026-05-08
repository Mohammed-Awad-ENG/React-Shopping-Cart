import { createContext } from "react";

export type cartItem = {
    id: number;
    quantity: number;
};

export type CartContext = {
    openCart: () => void;
    closeCart: () => void;
    isOpen: boolean;
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartQuantity: number;
    cartItems: cartItem[];
};

export const cartContext = createContext({} as CartContext);
