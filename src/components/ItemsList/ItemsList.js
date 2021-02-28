import React from "react";
import { connect } from 'react-redux';
import Item from '../Item/Item';

import { addToCart } from '../../store/actions/index';

import './ItemsList.css';

class ItemsList extends React.Component {

    onClickAddToCart = item => e => {
        alert(item.itemName + ' added to cart.');
        this.props.addToCart(item);
    }

    render() {
        return (
            <div className={'items-wrapper'}>
                <div className={'items-list'}>
                    <h3>Items</h3>
                    {this.props.items.map((item, index) => (
                        <Item
                            key={index}
                            itemName={item.itemName}
                            itemPrice={item.itemPrice}
                            itemBrand={item.itemBrand}
                            itemType={item.itemType}
                            click={this.onClickAddToCart(item)}
                            buttonname={'Add To Cart'}
                        ></Item>
                    ))}
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