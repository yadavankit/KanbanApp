import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

    //Handles Input Field changed event
    handleOnChange(event){
        this.props.onUserInput(event.target.value)
    }


    render() {

        return(
            <input type="search" placeholder="Search for a contact" value={this.props.filterText} onChange={this.handleOnChange.bind(this)}/>
        );

    }

}

SearchBar.propTypes = {
    onUserInput: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
};

export default SearchBar;