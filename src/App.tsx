import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";

function App() {
    return (
        <>
            <CartContextProvider>
                <Navbar />
                <Cart />
                <Outlet />
            </CartContextProvider>
        </>
    );
}

export default App;
