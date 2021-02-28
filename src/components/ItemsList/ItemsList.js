import React from "react";
import { connect } from 'react-redux';
import LikeButton from '../LikeButton/LikeButton';
import Button from '../Button/Button';

import { addToCart } from '../../store/actions/index';

import './ItemsList.css';

class ItemsList extends React.Component {

    onClickAddToCart = item => e => {
        console.log(item);
        this.props.addToCart(item);
    }

    render() {
        return (
            <div className={'items-wrapper'}>
                <div className={'items-list'}>
                    <h3>Items List</h3>
                    <table className={'items-table'}>
                        <thead>
                            <tr>
                                <th>
                                    Item Name
                            </th>
                                <th>
                                    Price
                            </th>
                                <th>
                                    Brand
                            </th>
                                <th>
                                    Action
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.items.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        {item.itemName}
                                    </td>
                                    <td>
                                        {item.itemPrice}
                                    </td>
                                    <td>
                                        {item.itemBrand}
                                    </td>
                                    <td>
                                        <LikeButton></LikeButton>
                                        <Button click={this.onClickAddToCart(item)} buttonname={'Add To Cart'}></Button>
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
        addToCart: item => dispatch(addToCart(item))
    };
}

function mapStateToProps(state) {
    return {
        items: state.shoppingCartReducer.items
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsList);