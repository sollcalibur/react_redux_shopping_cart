import React from "react";
import { connect } from 'react-redux';
import LikeButton from '../LikeButton/LikeButton';
import './Item.css';

class Item extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    componentDidUpdate(prevState) {

    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.itemName}
                </td>
                <td>
                    {this.props.itemPrice}
                </td>
                <td>
                    <LikeButton></LikeButton>
                </td>
            </tr>
        );
    }
}

// const mapDispatchToProps = {};

export default Item;