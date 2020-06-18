import React from 'react';
import SearchBar from "./SearchBar";

function PlanningCardsHeader(props) {
    return (
        <div className="planning-cards-grid">
            <SearchBar />
            <div className="main-panel--header">
                <h2 className="month--header">{props.month}</h2>
                <div className="days-grid">
                    {props.daysArray.map((day, index) =>
                        <div
                            key={day + index}
                            className={
                                props.currentDay === day ?
                                    "day-container active"
                                    :
                                    "day-container"
                            }
                        >
                            <h2 className="day--header">{day}</h2>
                            <h2 className="day-index--header">0{index + 1}</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PlanningCardsHeader;
