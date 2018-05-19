import React from 'react';
import ContactItem from './ContactItem'
import PropTypes from 'prop-types';

class ContactList extends React.Component {

    render() {

        let filteredContacts = this.props.contacts.filter(
            (contact) => contact.name.toLowerCase().indexOf(this.props.filterText) !== -1
         );

        return(
            <ul>
                {
                    filteredContacts.map(
                        (contact) => <ContactItem key={contact.email} name={contact.name} email={contact.email}/>
                    )
                }
            </ul>
        );

    }

}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filterText: PropTypes.string
};

export default ContactList;