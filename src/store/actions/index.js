import { ADD_TO_CART } from './shoppingCartActions';
import { REMOVE_FROM_CART } from './shoppingCartActions';

export function addToCart(payload) {
    return { type: ADD_TO_CART, payload }
}

export function removeFromCart(payload) {
    return { type: REMOVE_FROM_CART, payload }
}