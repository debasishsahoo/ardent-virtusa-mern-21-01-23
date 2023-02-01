import React from "react";
import './Card2.css'

const Card2 = (props) => {

    return (
        <div className="column">
            <div className="card">
                <h3>{props.title}</h3>
                <p>{props.txt1}</p>
                <p>{props.txt2}</p>
            </div>
        </div>
    );

}

export default Card2