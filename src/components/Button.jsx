import React from 'react';

function Button(props) {
    return (
        <div className="button">
            {props.counter ?
                <span className="icon counter">10</span>
            :
                <div className="icon">
                    <i className={props.icon}/>
                </div>
            }
            {props.text.length !== 0 &&
                <span className="text">{props.text}</span>
            }
            {props.dropdown &&
                <div className="icon">
                    <i className="fas fa-chevron-down"/>
                </div>
            }
        </div>
    );
}

export default Button;
