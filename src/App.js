import React from 'react';
import KanbanBoard from './KanbanBoard';
import ContactsApp from './ContactsApp';

let cardsList = [ {
    id:1,
    title: "Read the Book",
    description: "I should read the **whole** book",
    status: "in-progress",
    color: "#BD8D31",
    tasks: []
}, {
    id:2,
    title: "Write some code",
    description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
    status: "todo",
    color: "#3A7E28",
    tasks: [
        { id: 1, name:"ContactList Example", done:true },
        { id: 2, name:"Kanban Example", done:false },
        { id: 3, name:"My own experiments", done:false }
        ]
}, {
    id:3,
    title: "I challenge you to complete me, ohh shit, I'm already done",
    description: "Foray into Machine Learning",
    status: "done",
    color: "#119DA4",
    tasks: [
        { id:1, name:"Learn React, Tensorflow", done:true }
        ]
}, ];

let contacts = [
    { name: "Cassio Zen", email: "cassiozen@gmail.com" },
    { name: "Dan Abramov", email: "gaearon@somewhere.com" },
    { name: "Pete Hunt", email: "floydophone@somewhere.com" },
    { name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
    { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
    { name: "Sebastian Markbage", email: "sebmarkbage@here.com" },
];


class App extends React.Component {


    render() {

        return(
            <div>
                <ContactsApp contacts={contacts}/>
                <KanbanBoard cards={cardsList}/>
            </div>
        );

    }
}

export default App;