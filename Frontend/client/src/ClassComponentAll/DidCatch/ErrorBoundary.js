import React from "react";

class ErrorBoundary extends React.Component {
    state = { error: null, errinfo: null }
    
    componentDidCatch(error, errinfo) {
        this.setState({
            error: error,
            errinfo: errinfo
        })
    }

    render() {
        if (this.state.errinfo) {
            return (
                <div>
                    <h2>Something Went Wrong</h2>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errinfo.componentStack}
                    </details>
                </div>
            )

        }
        return this.props.children;
    }
}

export default ErrorBoundary