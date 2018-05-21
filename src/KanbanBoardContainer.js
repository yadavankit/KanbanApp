import React from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';
import update from 'react-addons-update';

const API_URL = 'http://kanbanapi.pro-react.com';

const API_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'none'
};


class KanbanBoardContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            cards: []
        };
    }

    componentDidMount() {
        fetch( API_URL + '/cards', {
            headers: API_HEADERS
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState(
                    {
                        cards: responseData,
                    }
                );
            })
            .catch((error) => {
                console.log('Error Fetching and parsing data', error);
            })
    }

    addTask(cardId, taskName) {

        //Find the index of card
        let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);

        //Create a new task with given name and temp Id
        let newTask = {id:Date.now(), name:taskName, done:false};

        //Create new object and push new task to it
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {$push: [newTask]}
            }
        });

        //Set component state to new mutated state
        this.setState({cards: nextState});

        //Call API to add task to server
        fetch(`${API_URL}/cards/${cardId}/tasks`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(newTask)
        })
        .then((response) => response.json())
        .then((responseData) => {
            //When Server returns definitive ID of task, update it on React
            newTask.id = responseData.id;
            this.setState({cards: nextState});
        });
    }

    deleteTask(cardId, taskId, taskIndex) {

        //Find the index of card
        let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);

        //Create new object without the task
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: { $splice: [[taskIndex, 1]] }
            }
        });

        //Set component state to mutated object
        this.setState({cards: nextState});

        //Call API to remove task from server
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
            method: 'delete',
            headers: API_HEADERS
        });
    }

    toggleTask(cardId, taskId, taskIndex) {

        //Find the index of card
        let cardIndex = this.state.cards.findIndex((card) => card.id === cardId);

        let newDoneValue;

        //Create new object with toggled task
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {
                    [taskIndex]: {
                        done: { $apply: (done) => {
                            newDoneValue = !done;
                            return newDoneValue;
                        }}
                    }
                }
            }
        });

        //Set component state to mutated object
        this.setState({cards: nextState});

        //Call API to change done status of task
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
            method: 'put',
            headers: API_HEADERS,
            body: JSON.stringify({done: newDoneValue})
        });

    }

    render() {

        return(
            <KanbanBoard cards={this.state.cards}
                         taskCallbacks={
                             {
                                 toggle: this.toggleTask.bind(this),
                                 add: this.addTask.bind(this),
                                 delete: this.deleteTask.bind(this)
                             }
                         }
            />
        );

    }
}

export default KanbanBoardContainer;