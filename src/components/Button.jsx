import React from 'react';

function Button(props) {
    return (
        <div className="button">
            <span>{props.icon}</span>
        </div>
    );
}

export default Button;
