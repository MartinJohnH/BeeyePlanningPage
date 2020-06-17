import React from 'react';

function Card() {
    return (
        <div className="card">
            <div className="color-indicator-container">
                <div className="color-indicator"/>
            </div>
            <div>
                <h4 className="date">15 NOV</h4>
                <h4 className="duration">2h</h4>
            </div>
            <div>
                <h2>Air Québec</h2>
                <h1>Expertise 2019</h1>
                <h3>Reporting/Situation</h3>
            </div>
            <div>
                <span>H</span>
                <h5>Domicile</h5>
                <span>C</span>
            </div>
        </div>
    );
}

export default Card;
