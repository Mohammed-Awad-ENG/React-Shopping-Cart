import { useState, type ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import items from "../data/items.json";
import { cartContext, type cartItem } from "./CartContextCreation";

type CartProviderProps = {
    children: ReactNode;
};

function CartContextProvider({ children }: CartProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage<cartItem[]>(
        "shopping-cart",
        [],
    );

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0,
    );
    function getItemQuantity(id: number) {
        return cartItems.find((item) => item.id == id)?.quantity || 0;
    }
    function increaseCartQuantity(id: number) {
        setCartItems((currentItems) => {
            if (currentItems.find((item) => item.id == id) == null) {
                return [...currentItems, { id, quantity: 1 }];
            } else {
                return currentItems.map((item) => {
                    const maxQuantity =
                        items.find((storeItem) => storeItem.id === id)
                            ?.quantity || 0;
                    if (item.id === id && item.quantity < maxQuantity) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }
    function decreaseCartQuantity(id: number) {
        setCartItems((currentItems) => {
            return currentItems
                .map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                })
                .filter((item) => item.quantity > 0);
        });
    }
    function removeFromCart(id: number) {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id !== id),
        );
    }

    return (
        <cartContext.Provider
            value={{
                openCart,
                closeCart,
                isOpen,
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartQuantity,
                cartItems,
            }}
        >
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider;
