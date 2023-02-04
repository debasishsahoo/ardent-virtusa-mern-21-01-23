import React from 'react';

class todosComponent extends React.Component {
    constructor() {
        super();

        //Default data for component
        this.state = {
            todos: ['Wake up at 6 am', 'Do gym', 'Bath']
        };
    }
    //Not Woking Method
    Addtodo = () => {
        this.state.todos.push('Virtusa(9:00am -12.00am )')
        this.state.todos.push('NSEC(1:30pm -5.30pm )')
        this.state.todos.push('Angular(6:30pm -8.30pm )')
        this.state.todos.push('Java(9:30pm -10.30pm )')
        console.log('Call form Addtodos:Method is Invoked')
        console.table(this.state.todos)
    }

    // Woking Method
    Addtodo2 = () => {
        let newtodos = [...this.state.todos];

        newtodos.push('Virtusa(9:00am -12.00am )')
        newtodos.push('NSEC(1:30pm -5.30pm )')
        newtodos.push('Angular(6:30pm -8.30pm )')
        newtodos.push('Java(9:30pm -10.30pm )')

        //setState is monitoring the Change & update the state object
        this.setState({ todos: newtodos })


        console.log('Call form Addtodos2:Method is Invoked')
        console.table(this.state.todos)

    }



    render() {
        //console.log('Call form Render:Method is Invoked')
        //console.table(this.state.todos)

        return (
            <div>
                <h2>Today Job</h2>
                <ul>
                    {
                        this.state.todos.map((element, index) => {
                            return (
                                <li key={index}>
                                    {element}
                                </li>
                            )
                        })
                    }
                </ul>

                {/* <button onClick={this.Addtodo}>Add todos</button> */}
                <button onClick={this.Addtodo2}>Add todo2</button>

            </div>
        );
    }
};

export default todosComponent






