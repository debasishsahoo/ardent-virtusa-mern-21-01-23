import React from 'react';
import { useParams } from 'react-router-dom';

function UserDatils(props) {

    //! http://localhost:3000/userlist/55 =>params

    //! Baseurl/PATH/params

    // let urlobject = useParams()

    // let id = urlobject.userid;

    let { userid } = useParams()



    console.log('id:', userid)

    return (
        <div>
            <h1>User Details Called</h1>
            <h2>Details of User{userid}</h2>
        </div>
    );
}

export default UserDatils;




