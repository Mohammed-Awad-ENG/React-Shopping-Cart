import useShoppingCart from "../hooks/useShoppingCart";
import type { cartItem } from "../types/cartItem.type";

interface StoreItemProps {
    item: cartItem;
}

function StoreItem({ item }: StoreItemProps) {
    const defaultImage = "/imgs/default.webp";
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart();
    const quantity = getItemQuantity(item.id);

    return (
        <div className="store-item">
            <img
                src={item.imageUrl}
                alt={item.name}
                onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== defaultImage) target.src = defaultImage;
                }}
            />
            <h3>{item.name}</h3>
            <p className="price">${item.price}</p>
            <p className="quantity">In Stock: {item.quantity}</p>

            {quantity === 0 ? (
                <button
                    className="add-to-cart"
                    onClick={() => increaseCartQuantity(item.id)}
                >
                    Add to Cart
                </button>
            ) : (
                <div className="quantity-controls">
                    <button
                        className="qty-btn minus"
                        onClick={() => decreaseCartQuantity(item.id)}
                        aria-label="Decrease quantity"
                    >
                        -
                    </button>
                    <div className="qty-divider" />
                    <span className="qty-value">{quantity}</span>
                    <div className="qty-divider" />
                    <button
                        className="qty-btn plus"
                        onClick={() => increaseCartQuantity(item.id)}
                        aria-label="Increase quantity"
                    >
                        +
                    </button>
                    <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                    >
                        🗑 Remove
                    </button>
                    {quantity === item.quantity && (
                        <span className="max-label">Max</span>
                    )}
                </div>
            )}
        </div>
    );
}

export default StoreItem;