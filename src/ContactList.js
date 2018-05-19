import React from 'react';
import ContactItem from './ContactItem'
import PropTypes from 'prop-types';

class ContactList extends React.Component {

    render() {

        return(
            <ul>
                {
                    this.props.contacts.map(
                        (contact) => <ContactItem key={contact.email} name={contact.name} email={contact.email}/>
                    )
                }
            </ul>
        );

    }

}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
};

export default ContactList;