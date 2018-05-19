import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import ContactList from './ContactList';

class ContactsApp extends React.Component {

    constructor() {
        super();
        this.state = {
            filterText: ''
        };
    }

    //Handles User Input in Search Bar Component
    handleUserInput(searchTerm) {
        this.setState({filterText: searchTerm});
    }

    render() {

        return(
            <div>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
                <ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
            </div>
        );

    }

}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
};

export default ContactsApp;