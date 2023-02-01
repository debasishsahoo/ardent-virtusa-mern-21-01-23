import React from "react";

const NonJsxComponent = () => {
    return (
        React.createElement("p", { className: '' }, 'This is a Non jsx element')
    );

}
export default NonJsxComponent;