import './Button.css';


function Button(props) {
    return (
        <div className={'button-wrapper'}>
            <button onClick={props.click} className={'custom-button'}>{props.buttonname}</button>
        </div>
    );
}

export default Button;
