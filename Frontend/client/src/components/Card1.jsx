import React from "react";
import './Card1.css'

const Card1 = () => {

    const imgsrc = "https://commissio3.imgix.net/attachments/8eb8c335-ebd2-4ee5-a6da-aec339a72ace/dave.png?ixlib=rails-2.1.4&h=1000&fit=fillmax&s=3e70b5617ae6abe20af4892c8fc9f1e0";

    return (
        <div>
            <h2>Card 1</h2>
            <div class="card">
                <img src={imgsrc} class="img" />
                <div class='container'>
                    <h4>Debasish</h4>
                    <p>CSE</p>
                </div>
            </div>
        </div>
    );

}

export default Card1