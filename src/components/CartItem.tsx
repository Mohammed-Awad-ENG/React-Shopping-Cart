import useSoppingCart from "../hooks/useShoppingCart";
import type { cartItem } from "../types/cartItem.type";

function CartItem({ item }: { item: cartItem }) {
    const { id, name, price, imageUrl, quantity } = item;
    const defaultImage = "../imgs/default.webp";
    const {
        removeFromCart,
        decreaseCartQuantity,
        increaseCartQuantity,
    } = useSoppingCart();

    return (
        <div className="cart-item" >
            <img
                src={imageUrl}
                alt={name}
                onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== defaultImage) target.src = defaultImage;
                }}
            />
            <div className="cart-item_info">
                <h3 title={name}>{name}</h3>
                <p className="cart-item_price">${price * quantity}</p>
            </div>
            <div className="cart-item_controls">
                <div className="quantity-controls">
                    <button
                        className="qty-btn minus"
                        onClick={() => decreaseCartQuantity(id)}
                    >
                        -
                    </button>
                    <div className="qty-divider" />
                    <span className="qty-value">{quantity}</span>
                    <div className="qty-divider" />
                    <button
                        className="qty-btn plus"
                        onClick={() => increaseCartQuantity(id)}
                    >
                        +
                    </button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(id)}>
                    🗑 Remove
                </button>
            </div>
        </div>
    );
}

export default CartItem;
