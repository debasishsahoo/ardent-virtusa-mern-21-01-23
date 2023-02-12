import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom"


function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink> </li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/gallary'>Gallary</NavLink></li>
                    <li><NavLink to='/student'>Student</NavLink></li>
                    <li><NavLink to='/userlist'>User</NavLink></li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </>

    )
}




export default Layout;