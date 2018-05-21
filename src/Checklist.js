import React from 'react';
import PropTypes from 'prop-types';

class Checklist extends React.Component {

    //Handles Enter Click after adding new task
    checkInputKeyPress(event) {
        if (event.key === "Enter") {
            this.props.taskCallbacks.add(this.props.cardId, event.target.value);
            event.target.value = '';
        }
    }

    render() {

        let tasks = this.props.tasks.map((task, taskIndex) => (
            <li key={task.id} className="checklist__task">
                <input type="checkbox" defaultChecked={task.done}
                       onChange={this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)}/>
                {task.name}{"  "}
                <a href="#" className="checklist__task--remove"
                   onClick={this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)}/>
            </li>
        ));

        return (
            <div className="checklist">
                <ul>
                    {tasks}

                    {/*Input Field for Creating a new task*/}
                    <input type="text" className="checklist--add-task" placeholder="Type then hit enter to add a new task"
                           onKeyPress={this.checkInputKeyPress.bind(this)}/>
                </ul>
            </div>
        );

    }

}

Checklist.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
};

export default Checklist;