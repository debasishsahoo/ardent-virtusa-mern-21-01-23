import React from "react";
import { Outlet, Link } from "react-router-dom";

const layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/galary'>Galary</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )

}

export default layout;