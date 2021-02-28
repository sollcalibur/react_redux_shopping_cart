import { ADD_TO_CART } from './shoppingCartActions';
import { REMOVE_FROM_CART } from './shoppingCartActions';

export function addToCart(payload) {
    // console.log(payload)

    console.log('event fired')
    return { type: ADD_TO_CART, payload }
}

export function removeFromCart(payload) {
    console.log("remove " + payload)

    return { type: REMOVE_FROM_CART, payload }
}