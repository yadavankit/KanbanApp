import React from 'react';
import KanbanBoardContainer from './KanbanBoardContainer';
import ContactsAppContainer from './ContactsAppContainer';


class App extends React.Component {


    render() {

        return(
            <div>
                {/*<ContactsAppContainer />*/}
                <KanbanBoardContainer />
            </div>
        );

    }
}

export default App;