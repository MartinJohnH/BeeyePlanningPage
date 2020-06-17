import React from 'react';
import LatePanelHeader from "./LatePanelHeader";
import TaskCounter from "./TaskCounter";
import Card from "./Card";
import LatePanel from "./LatePanel";

function PlanningCards() {
    const daysArray = ["lundi", "mardi", "mercredi", "Jeudi", "vendredi", "samedi", "dimanche"];
    return (
        <div className="planning-cards-grid">
            <div>
                <LatePanelHeader />
                <LatePanel />
            </div>
            <div>
                <div className="days-grid">
                    {daysArray.map((day, index) =>
                        <div className="cards-container">
                            <Card />
                        </div>
                    )}
                </div>
                <TaskCounter daysArray={daysArray} />
            </div>
        </div>
    );
}

export default PlanningCards;
