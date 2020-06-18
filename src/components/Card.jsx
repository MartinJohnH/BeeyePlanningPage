import React from 'react';

function Card() {
    return (
        <div className="card">
            <div className="color-tab-container">
                <div className="color-tab"/>
            </div>
            <div className="card-header">
                <h4 className="deadline">15 NOV</h4>
                <h4 className="duration">2h</h4>
            </div>
            <div>
                <h2 className="client-name">AIR QUEBEC</h2>
                <h1 className="project-name">Expertise 2019</h1>
                <h3 className="task-name">Reporting/Situation</h3>
            </div>
            <div className="card-footer">
                <div className="card-footer-inner-wrapper">
                    <span className="location-icon">H</span>
                    <h5 className="location">Domicile</h5>
                </div>
                <span className="comment">C</span>
            </div>
        </div>
    );
}

export default Card;
