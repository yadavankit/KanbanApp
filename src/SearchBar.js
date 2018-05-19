import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

    render() {

        return(
            <input type="search" placeholder="Search for a contact" />
        );

    }

}

SearchBar.propTypes = {
};

export default SearchBar;