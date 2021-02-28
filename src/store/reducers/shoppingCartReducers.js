import { ADD_TO_CART } from '../actions/shoppingCartActions';
import { REMOVE_FROM_CART } from '../actions/shoppingCartActions';

const initialState = {
    items: [
        {
            itemId: 1,
            itemName: 'RX 6900 XT Graphics Card',
            itemPrice: 'PHP 60000',
            itemBrand: 'AMD'
        },
        {
            itemId: 2,
            itemName: 'RX 6800 XT Graphics Card',
            itemPrice: 'PHP 40000',
            itemBrand: 'AMD'
        },
        {
            itemId: 3,
            itemName: 'RX 6700 XT Graphics Card',
            itemPrice: 'PHP 30000',
            itemBrand: 'AMD'
        },
        {
            itemId: 4,
            itemName: 'RX 6700 Graphics Card',
            itemPrice: 'PHP 25000',
            itemBrand: 'AMD'
        }
    ],

    myCart: [
    ],

    myLikedItems: [
    ]
}

export default function shoppingCartReducers(state = initialState, action) {
    console.log(action.payload)
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                myCart: state.myCart.concat(action.payload)
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                myCart: state.myCart.filter(item => item.itemId !== action.payload)
            }
        default:
            return state;
    }
}