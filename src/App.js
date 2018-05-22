import React from 'react';
import KanbanBoardContainer from './KanbanBoardContainer';
import ContactsAppContainer from './ContactsAppContainer';
import ShoppingList from './ShoppingList';
import SnackDnDContainer from './SnackDnDContainer';


class App extends React.Component {


    render() {

        return(
            <div>
                {/*<ContactsAppContainer />*/}
                {/*<KanbanBoardContainer />*/}
                {/*<ShoppingList />*/}
                <SnackDnDContainer />
            </div>
        );

    }
}

export default App;