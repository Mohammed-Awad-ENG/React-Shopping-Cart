import useShoppingCart from "../hooks/useShoppingCart";
import "./cart.css";
import CartItem from "./CartItem";
import items from "../data/items.json";
function Cart() {
    const { isOpen, closeCart, cartItems } = useShoppingCart();
    return (
        <>
            <div className={`cart ${isOpen ? "active" : ""}`}>
                <button className="close-cart" onClick={closeCart}>
                    X
                </button>
                <h1 style={{ padding: "15px" }}>Cart</h1>
                <div className="cart-body">
                    {cartItems.map((cartItem) => {
                        const item = items.find((i) => i.id === cartItem.id);
                        if (!item) return null;
                        return (
                            <CartItem
                                key={cartItem.id}
                                item={{ ...item, quantity: cartItem.quantity }}
                            />
                        );
                    })}
                </div>
                <h2 className="total-price">
                    <span>Total:</span>{" "}$
                    {cartItems.reduce((total, CartItem) => {
                        const item = items.find((i) => i.id == CartItem.id);
                        return total + (item?.price || 0) * CartItem.quantity;
                    }, 0)}
                    
                </h2>
            </div>
            {isOpen && <div className="overlay" onClick={closeCart}></div>}
        </>
    );
}

export default Cart;
