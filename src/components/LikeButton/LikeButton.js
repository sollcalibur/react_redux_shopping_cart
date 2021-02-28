import React from "react";
import './LikeButton.css';

class LikeButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonName: "Like",
            buttonStyle: "like-button"
        }
    }

    onClickLikeButton = (e) => {
        this.setState({
            buttonName: this.state.buttonName === "Like" ? "Unlike" : "Like",
            buttonStyle: this.state.buttonStyle === "like-button" ? "unlike-button" : "like-button"
        })
    }

    render() {
        return (
            <div className={'button-wrapper'}>
                <button onClick={this.onClickLikeButton} className={'button ' + this.state.buttonStyle} >{this.state.buttonName}</button>
            </div>
        );
    }
}
export default LikeButton;