import React from 'react';
import ContactsApp from './ContactsApp'
import 'whatwg-fetch'

class ContactsAppContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        fetch('./contacts.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((responseData) => {
            this.setState(
                {
                    contacts: responseData,
                }
            );
        })
        .catch((error) => {
            console.log('Error Fetching and parsing data', error);
        })
    }

    render() {

        return(
            <ContactsApp contacts={this.state.contacts} />
        );

    }
}

export default ContactsAppContainer;