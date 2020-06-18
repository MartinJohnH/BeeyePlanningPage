import React from 'react';

function NewTaskButton() {
    return (
        <div className="new-task-button">
            <div className="new-task-inner-wrapper">
                <div className="icon">
                    <i className="far fa-calendar-plus"/>
                </div>
                <span className="button-name">Planifier une tâche</span>
            </div>
        </div>
    );
}

export default NewTaskButton;
