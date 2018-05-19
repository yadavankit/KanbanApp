import React from 'react';
import KanbanBoard from './KanbanBoard'
import 'whatwg-fetch'

class KanbanBoardContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            cards: []
        };
    }

    componentDidMount() {
        fetch('./kanban-tasks.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
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

    render() {

        return(
            <KanbanBoard cards={this.state.cards} />
        );

    }
}

export default KanbanBoardContainer;