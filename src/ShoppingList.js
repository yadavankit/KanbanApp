import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class ShoppingList extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            items: [
                {id:1, name: 'Milk'},
                {id:2, name: 'Eggs'},
                {id:3, name: 'Bread'},
            ]
        };
    }

    handleChange(event) {

        if (event.key === "Enter") {
            //Create new item and set current time as its ID
            let newItem = {id:Date.now(), name:event.target.value};
            //Create new items with previous plus new item
            let newItems = this.state.items.concat(newItem);
            event.target.value = '';
            //Set new state
            this.setState({items: newItems});
        }
    }

    handleRemove(itemIndex) {

        //Create new items with removed item
        var newItems = this.state.items;
        newItems.splice(itemIndex, 1);
        this.setState({items:newItems});
    }

    render() {

        let shoppingItems = this.state.items.map((item, itemIndex) => (
            <div key={item.id} className="item" onClick={this.handleRemove.bind(this, itemIndex)}>
                {item.name}
            </div>
        ));

        return (
            <div>
                <ReactCSSTransitionGroup transitionName="example"
                                         transitionEnterTimeout={300}
                                         transitionLeaveTimeout={300}
                                         transitionAppear={true}
                                         transitionAppearTimeout={300}>
                    {shoppingItems}
                </ReactCSSTransitionGroup>
                <input type="text" value={this.state.newItem} onKeyDown={this.handleChange.bind(this)}/>
            </div>
        );

    }

}

export default ShoppingList;