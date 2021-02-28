import { ADD_TO_CART } from '../actions/shoppingCartActions';
import { REMOVE_FROM_CART } from '../actions/shoppingCartActions';

const initialState = {
    items: [
        {
            itemId: 1,
            itemName: 'RX 6900 XT Graphics Card',
            itemPrice: '60000',
            itemBrand: 'AMD',
            itemType: 'GPU'
        },
        {
            itemId: 2,
            itemName: 'Ryzen Threadripper 2990WX Processor',
            itemPrice: '40000',
            itemBrand: 'AMD',
            itemType: 'CPU'
        },
        {
            itemId: 3,
            itemName: 'NVIDIA RTX 3090 Graphics Card',
            itemPrice: '100000',
            itemBrand: 'NVIDIA',
            itemType: 'GPU'
        },
        {
            itemId: 4,
            itemName: 'Ryzen 9 3950X Processor',
            itemPrice: '50000',
            itemBrand: 'AMD',
            itemType: 'CPU'
        },
        {
            itemId: 5,
            itemName: 'Core i9 10th Gen 10900K Processor',
            itemPrice: '50000',
            itemBrand: 'Intel',
            itemType: 'CPU'
        },
        {
            itemId: 6,
            itemName: 'AMD Radeon Instinct Mi60 Server Accelerator',
            itemPrice: '100000',
            itemBrand: 'AMD',
            itemType: 'GPU'
        },
        {
            itemId: 7,
            itemName: 'NVIDIA RTX 3080Ti Graphics Card',
            itemPrice: '100000',
            itemBrand: 'NVIDIA',
            itemType: 'GPU'
        }
    ],

    myCart: [
    ],
}

export default function shoppingCartReducers(state = initialState, action) {
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