import { createReducer, on } from "@ngrx/store";
import { initialState } from "./cart.state";
import { addCart, removeCart } from "./cart.action";

const _cartReducer = createReducer(initialState,
    on(addCart, (state, payload) => {
        return {
            ...state,
            cart: [...state.cart, payload]
        };
    }),
    on(removeCart, (state, { product }) => {
        const removeItem = state.cart.filter((cartItem: any) => cartItem !== product);
        return {
          ...state,
          cart: removeItem,
        };
    }),
)

export function cartReducer(state: any, action: any) {
    return _cartReducer(state, action);
}