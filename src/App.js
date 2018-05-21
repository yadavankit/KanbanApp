import React from 'react';
import KanbanBoardContainer from './KanbanBoardContainer';
import ContactsAppContainer from './ContactsAppContainer';
import ShoppingList from './ShoppingList';


class App extends React.Component {


    render() {

        return(
            <div>
                {/*<ContactsAppContainer />*/}
                <KanbanBoardContainer />
                {/*<ShoppingList />*/}
            </div>
        );

    }
}

export default App;