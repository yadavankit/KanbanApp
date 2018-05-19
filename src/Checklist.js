import React, {Component} from 'react';

class Checklist extends Component {

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

export default Checklist;