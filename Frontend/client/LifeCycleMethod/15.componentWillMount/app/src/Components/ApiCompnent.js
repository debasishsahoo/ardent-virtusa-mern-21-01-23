import React from 'react'


class ApiComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: {}
        };

    }
    componentWillMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(json => {
                this.setState({ todo: json });
            });
    }

    render() {
        const { todo } = this.state;
        console.log(todo)
        return (
            <div>
                <p>API call :</p>
                <p>Todo title : {todo.title}</p>
                <p>Todo completed : {todo.completed === true ? "true" : "false"}</p>
            </div>
        );
    }
}

export default ApiComponent;
