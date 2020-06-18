import React from 'react';

function TaskCounter(props) {
    return (
        <div className="days-grid">
            {props.daysArray.map(() =>
                <div className="number-subheader">
                    <span>0 / 3</span>
                </div>
            )}
        </div>
    );
}

export default TaskCounter;
