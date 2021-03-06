import React from 'react';

function Card(props) {
    return (
        <div className={props.isCompleted ? "card" : "card small-padding"}>
            <div className="color-tab-container">
                <div
                    className={
                        props.isLate ?
                            "color-tab late"
                        : props.isCompleted ?
                            "color-tab complete"
                        :
                            "color-tab"
                    }
                />
            </div>
            {!props.isCompleted &&
                <div className="card-header">
                    <h4 className={props.isLate ? "deadline late" : "deadline"}>15 NOV</h4>
                    <h4 className="duration">2h</h4>
                </div>
            }
            <div>
                <h2 className="client-name">AIR QUEBEC</h2>
                {!props.isCompleted &&
                    <>
                        <h1 className="project-name">Expertise 2019</h1>
                        <h3 className="task-name">Reporting/Situation</h3>
                    </>
                }
            </div>
            {!props.isCompleted &&
                <div className="card-footer">
                    <div className="card-footer-inner-wrapper">
                        <div className="location-icon">
                            <i className="fas fa-home"/>
                        </div>
                        <h5 className="location">Domicile</h5>
                    </div>
                    <div className="comment">
                        <i className="far fa-comments"/>
                    </div>
                </div>
            }
        </div>
    );
}

export default Card;
