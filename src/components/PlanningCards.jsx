import React from 'react';
import LatePanelHeader from "./LatePanelHeader";
import TaskCounter from "./TaskCounter";
import Card from "./Card";
import LatePanel from "./LatePanel";
import NewTaskButton from "./NewTaskButton";

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
                        <div key={"cards " + day + index} className="cards-container">
                            {props.daysArray.map((day, index) =>
                                <div key={"card " + day + index}>
                                    {index < 5 &&
                                        <Card isCompleted={false} isLate={false}/>
                                    }
                                </div>
                            )}
                            {index === 6 &&
                                <NewTaskButton />
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PlanningCards;
