import React from 'react';

function ValueProps(props) {
    return (
        <div>
            <div><i>String Literales:</i>{props.stringdata}</div>
            <div><i>Template Literales:</i>{props.templatedata}</div>
            <div><i>Number Literales:</i>{props.numberdata}</div>
            <div><i>boolean Literales:</i>{props.booldata}</div>
            <div><i>Object Literales:</i>{props.objdata.name}</div>
            <div><i>Array Literales:</i>{props.arrdata}</div>
            <div><i>Jsx Literales:</i>{props.jsxdata}</div>


        </div>
    );
}

export default ValueProps;