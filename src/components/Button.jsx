import React from 'react';

function Button(props) {
    return (
        <div className="button">
            <span className="icon">{props.icon}</span>
            {props.text.length !== 0 &&
                <span className="text">{props.text}</span>
            }
            {props.dropdown &&
                <span className="icon">v</span>
            }
        </div>
    );
}

export default Button;
