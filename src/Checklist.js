import React from 'react';
import PropTypes from 'prop-types';

class Checklist extends React.Component {

    render() {

        let tasks = this.props.tasks.map((task) => (
            <li key={task.id} className="checklist__task">
                <input type="checkbox" defaultChecked={task.done} />
                {task.name}
                <a href="#" className="checklist__task--remove" />
            </li>
        ));

        return (
            <div className="checklist">
                <ul>
                    {tasks}

                    {/*Input Field for Creating a new task*/}
                    <input type="text" className="checklist--add-task" placeholder="Type then hit enter to add a new task"/>
                </ul>
            </div>
        );

    }

}

Checklist.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object)
};

export default Checklist;