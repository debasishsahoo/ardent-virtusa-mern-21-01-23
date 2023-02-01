import React from "react";

class Student extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log('This is A LifeCycled Method')
    }
    
    render() {
        return (
            <div>
                <h1>Student Component</h1>
                <h4>Class Based Component</h4>
                <h5>Old Concept</h5>
            </div>
        )
    }
}
export default Student;