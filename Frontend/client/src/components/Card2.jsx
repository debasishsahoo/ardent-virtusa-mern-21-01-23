import React from "react";
import './Card2.css'

const Card2 = (porps) => {

    return (
        <div className="column">
            <div className="card">
                <h3>{porps.title}</h3>
                <p>{porps.txt1}</p>
                <p>{porps.txt2}</p>
            </div>
        </div>
    );

}

export default Card2