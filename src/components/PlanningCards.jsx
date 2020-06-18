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

                {/* temporary just to fill in as mock data */}

                <div className="days-grid main">
                    {props.daysArray.map((day, index) =>
                        <div key={"cards " + day + index} className="cards-container">
                            {index < 5 && props.daysArray.map((day, index) =>
                                <div key={"card " + day + index}>
                                    {index < 4 &&
                                        <Card isCompleted={false} isLate={false}/>
                                    }
                                </div>
                            )}
                            {index < 4 &&
                                <>
                                    <Card isCompleted={true} isLate={false}/>
                                    <Card isCompleted={true} isLate={false}/>
                                </>
                            }
                            {index === 4 &&
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
