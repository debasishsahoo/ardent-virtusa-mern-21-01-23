import React from 'react';
import { Link, Outlet } from 'react-router-dom'

function Student(props) {
    return (
        <>
            <div>
                <h1>Student Component</h1>
                <nav>
                    <ul>
                        <li><Link to='jee'>JEE</Link></li>
                        <li><Link to='neet'>NEET</Link></li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </>
    );
}

export default Student;