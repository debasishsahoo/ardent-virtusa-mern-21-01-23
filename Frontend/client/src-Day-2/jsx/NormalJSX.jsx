import React from "react";

const JsxComponent = () => {
    const x = 15;

    const name = "Debasish Sahoo";
    const element = <h2>Hi {name} ,from simple Element</h2>

    function formatname(user) {
        return `${user.fname}  ${user.lname}`;

    }

    const user = {
        fname: 'Debasish',
        lname: 'Sahoo'
    };
    const RenderElement = (
        <h1>Hello ,{formatname(user)} ,from Complex Element</h1>
    );

    const NestedChildren = (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    );
    const customStyle = {
        border: "5px outset red",
        backgroundColor: 'lightblue',
        textAlign: 'center',
    }





    return (

        <>
            <h1>React is {(5 + 5) * 2 * 5 + 10} times Better with JSX</h1>
            <div>
                <a href={(x) < 10 ? "https://google.com" : "https://bing.com"}>link</a>

                <br />

                {element}

                <br />

                {RenderElement}

                <br />
                {NestedChildren}

                <h1>The div element</h1>

                <div style={customStyle}>
                    <h2>This is a heading in a div element</h2>
                    <p>This is some text in a div element.</p>
                </div>

                <p>This is some text outside the div element.</p>


            </div>
        </>

    );
}

export default JsxComponent;