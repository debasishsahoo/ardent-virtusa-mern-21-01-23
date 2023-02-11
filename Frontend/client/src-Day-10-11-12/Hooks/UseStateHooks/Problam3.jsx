import React, { useState } from 'react';

function Problam3(props) {
    const user = {
        username: 'dev',
        password: '1234'
    }

    const [Data, setData] = useState(user)
    const [form, setform] = useState(user)
    const [submit, submitted] = useState(false)

    //console.log(Data.username)

    const UpdateFiled = (e) => {
        //console.log(e)
        console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.value)

        //console.log('Name:',e.target.name)
        //console.log('Value:',e.target.value)

        setData({
            ...Data, [e.target.name]: e.target.value
        });

    }

    const PrintValue = (e) => {
        e.preventDefault();
        setform({
            username: Data.username,
            password: Data.password
        });
        submitted(true)


    }


    const [msg, setMsg] = useState('')

    return (
        <div>
            <div>
                <form onSubmit={PrintValue}>
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
                <br />
                <p>{submit ? form.username : null}</p>
                <p>{form.password}</p>
            </div>
            <div>
                <input
                    type='text'
                    value={msg}
                    placeholder='Enter Something......'
                    onChange={
                        e => {
                            const val = e.target.value;
                            setMsg(prev => prev + val)
                        }
                    }
                />
                <br />
                <p>{msg}</p>


            </div>
        </div>
    );
}

export default Problam3;