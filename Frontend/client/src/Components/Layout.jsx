import React from "react";
import { Outlet, Link } from "react-router-dom"


// const layout = () => {
//     return (
//         <>
//             <nav>
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Cantct</li>
//                     <li>Gallary</li>
//                 </ul>
//             </nav>
//         </>
//     )
// }


function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li> <Link to='/'>Home</Link> </li>

                    <li><Link to='/about'>About</Link></li>

                    <li><Link to='/contact'>Contact</Link></li>

                    <li><Link to='/gallary'>Gallary</Link></li>
                </ul>
            </nav>

            <div>
                <Outlet />
            </div>

        </>
    )
}




export default Layout;