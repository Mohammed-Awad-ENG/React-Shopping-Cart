import "./Store.css";
import STORE_ITEMS from "../data/items.json";
import StoreItem from "./StoreItem";
import type { cartItem } from "../types/cartItem.type";

function Store() {
    return (
        <div className="store-container">
            <div className="store-grid">
                {STORE_ITEMS.map((item: cartItem) => (
                    <StoreItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Store;
