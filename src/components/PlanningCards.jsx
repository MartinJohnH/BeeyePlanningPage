import React from 'react';
import LatePanelHeader from "./LatePanelHeader";
import TaskCounter from "./TaskCounter";
import Card from "./Card";
import LatePanel from "./LatePanel";

function PlanningCards(props) {
    return (
        <div className="planning-cards-grid">
            <div>
                <LatePanelHeader />
                <LatePanel />
            </div>
            <div>
                <TaskCounter daysArray={props.daysArray} />
                <div className="days-grid main">
                    {props.daysArray.map((day, index) =>
                        <div className="cards-container">
                            <Card />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PlanningCards;
