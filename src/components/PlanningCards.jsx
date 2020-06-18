import React from 'react';
import LatePanelHeader from "./LatePanelHeader";
import TaskCounter from "./TaskCounter";
import Card from "./Card";
import LatePanel from "./LatePanel";

function PlanningCards() {
    const daysArray = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"];
    return (
        <div className="planning-cards-grid">
            <div>
                <LatePanelHeader />
                <LatePanel />
            </div>
            <div>
                <TaskCounter daysArray={daysArray} />
                <div className="days-grid main">
                    {daysArray.map((day, index) =>
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
