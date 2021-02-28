import React from "react";
import { connect } from 'react-redux';
import Button from '../Button/Button';

import { removeFromCart } from '../../store/actions/index';

import './ShoppingCart.css';

class ShoppingCart extends React.Component {
    onClickDelete = item => event => {
        this.props.removeFromCart(item);
    }

    render() {
        return (
            <div className={'shopping-wrapper'}>
                <div className={'shopping-cart'}>
                    <h3>My Cart</h3>
                    <table className={'shopping-table'}>
                        <thead>
                            <tr>
                                <th>
                                    Item Name
                                </th>
                                <th>
                                    Price
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.myCart.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        {item.itemName}
                                    </td>
                                    <td>
                                        {item.itemPrice}
                                    </td>
                                    <td>
                                        <Button click={this.onClickDelete(item.itemId)} buttonname={'Remove From Cart'}></Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item))
    };
}

function mapStateToProps(state) {
    return {
        myCart: state.shoppingCartReducer.myCart
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCart);

