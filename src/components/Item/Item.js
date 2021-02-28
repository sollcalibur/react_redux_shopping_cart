import Button from '../Button/Button';
import LikeButton from '../LikeButton/LikeButton';
import './Item.css';

function Item(props) {
    return (
        <div className={'item'}>
            <div className={'item-body-section-a'}>
                <h4>
                    {props.itemName}
                </h4>
                <p>
                    {props.itemType} | {props.itemBrand}
                </p>
            </div>
            <div className={'item-body-section-b'}>
                <p>
                    PHP {props.itemPrice}.00
                </p>
                <LikeButton></LikeButton>
                <Button click={props.click} buttonname={props.buttonname}></Button>
            </div>
        </div>
    );
}

export default Item;