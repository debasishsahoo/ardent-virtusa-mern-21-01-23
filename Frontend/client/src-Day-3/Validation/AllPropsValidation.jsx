import React from 'react';
import PropTypes from 'prop-types';
class AllPropsValidation extends React.Component {
    render() {
        return (
            <div>
                <h1>ReactJS Props validation example</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Value</th>
                            <th>Valid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Any</td>
                            <td>{this.props.propAny}</td>
                            <td>{this.props.propAny ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>Object</td>
                            <td>{this.props.propObject.name}</td>
                            <td>{this.props.propObject ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>Array</td>
                            <td>{this.props.propArray}</td>
                            <td>{this.props.propArray ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>Boolean</td>
                            <td>{this.props.propBool ? "true" : "False"}</td>
                            <td>{this.props.propBool ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>Function</td>
                            <td>{this.props.propFunc(5)}</td>
                            <td>{this.props.propFunc(5) ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>String</td>
                            <td>{this.props.propString}</td>
                            <td>{this.props.propString ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>Number</td>
                            <td>{this.props.propNumber}</td>
                            <td>{this.props.propNumber ? "true" : "False"}</td>
                        </tr>
                        <tr>
                            <td>Symble</td>
                            <td>{this.props.propSymble}</td>
                            <td>{this.props.propSymble ? "true" : "False"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
AllPropsValidation.propTypes = {
    propAny: PropTypes.any,
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object,
    propSymble: PropTypes.symbol
}
AllPropsValidation.defaultProps = {
    propAny: 45,
    propArray: [1, 2, 3, 4, 5],
    propBool: true,
    propFunc: function (x) { return x + 5 },
    propNumber: 1,
    propString: "Debasish Sahoo",
    propObject: { name: "Rohit" },
    propSymble: Symbol("m")
}
export default AllPropsValidation;  