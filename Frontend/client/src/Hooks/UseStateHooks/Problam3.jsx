import React, { useState } from 'react';

function Problam3(props) {
    const user = {
        username: 'dev',
        password: '12345'
    }

    const [Data, setData] = useState(user)

    //console.log(Data.username)

    const UpdateFiled = (e) => {

        //console.log('Name:',e.target.name)
        //console.log('Value:',e.target.value)

        setData({
            ...Data, [e.target.name]: e.target.value
        });

    }

    const PrintValue = (e) => {

     }




    return (
        <div>
            <form>
                <label>UserName:
                    <input
                        type='text'
                        value={Data.username}
                        name="username"
                        onChange={UpdateFiled}
                    /></label>
                <br />

                <label>Password:
                    <input
                        type='password'
                        value={Data.password}
                        name="password"
                        onChange={UpdateFiled}
                    /></label>
                <br />
                <button>Submit</button>
            </form>

        </div>
    );
}

export default Problam3;