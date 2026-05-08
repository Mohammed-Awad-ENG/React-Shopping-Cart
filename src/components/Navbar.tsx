import { NavLink } from "react-router-dom";
import "./Navbar.css";
import useSoppingCart from "../hooks/useShoppingCart";
function Navbar() {
    const { cartQuantity, openCart } = useSoppingCart();

    return (
        <div className="navbar">
            <div className="container">
                <div className="links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Store</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
                {cartQuantity > 0 && (
                    <div className="cart-btn" onClick={openCart}>
                        <img src="/imgs/cartIcon.gif" alt="" width="30px" />
                        <span className="items-count">{cartQuantity}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
