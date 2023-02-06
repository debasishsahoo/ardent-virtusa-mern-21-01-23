import React from "react";
import Buggy from "./Buggy";
import NotBuggy from "./NotBuggy";
import ErrorBoundary from "./ErrorBoundary";

export default class LyDidCatch extends React.Component {

    state = {
        error: false
    }
    componentDidCatch(error) {
        this.setState({
            error: true
        })
    }

    render() {
        return (
            <React.StrictMode>
                <div>
                    {this.state.error ? <div>Some Error</div> : <h1>{this.state.heading}</h1>}

                    <h2>Error Boundaries Example</h2>
                    <ErrorBoundary>
                        <Buggy />
                    </ErrorBoundary>


                    <ErrorBoundary>
                        <NotBuggy />
                    </ErrorBoundary>
                </div>
            </React.StrictMode>
        );
    }

}