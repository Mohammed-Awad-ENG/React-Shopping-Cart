import { useContext } from "react";
import { cartContext } from "../context/CartContextCreation";

export default function useSoppingCart() {
    return useContext(cartContext);
}
