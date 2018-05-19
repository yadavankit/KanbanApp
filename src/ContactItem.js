import React from 'react';
import PropTypes from 'prop-types';

class ContactItem extends React.Component {

    render() {

        return(
            <li>{this.props.name} - {this.props.email}</li>
        );

    }

}

ContactItem.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string
};

export default ContactItem;