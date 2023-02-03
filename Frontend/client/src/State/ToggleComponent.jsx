import React from 'react';
import './Toggle.css'

class ToggleComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
    }


    render() {
        return (
            <>
                {
                    this.state.show ? <div className='msg'>Message Box</div> : null
                }
                <div>
                    <button className='button show' onClick={
                        () => { this.setState({ show: true }) }
                    }>Show</button>
                    <button className='button hide' onClick={
                        () => { this.setState({ show: false }) }
                    }>Hide</button>
                    <button className='button togg' onClick={
                        () => { this.setState({ show: !this.state.show }) }
                    }>Toggle</button>
                </div>

            </>

        );
    };

}

export default ToggleComponent;