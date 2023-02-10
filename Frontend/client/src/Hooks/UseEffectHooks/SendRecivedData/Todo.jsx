import React, { useState, useEffect, useRef } from "react";
import { getList, setList } from './Service'

function PostList() {
    const URL = 'https://jsonplaceholder.typicode.com/posts';

    const post = {
        title: '',
        body: ''
    }


    const [List, setList] = useState([])
    const [userinput, setuserinput] = useState(post)
    const [alert, setAlert] = useState(false)

    let mounted = useRef(true)



    useEffect(() => {
        mounted.current = true
        if (List.length && !alert) {
            return;
        }
        getList(URL).then(post => {
            if (mounted.current) {
                setList(post)
            }
        })
        return () => mounted.current = false

    }, [alert, List]);




    
    useEffect(() => {
        if (alert) {
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        }
    }, [alert])


    const HendelSubmit = (e) => {
        e.preventDefault();
        setList(userinput).then(() => { setuserinput(post) })

    }

    return (
        <div>
            <h1>My ToDO List</h1>
            {/* <form onSubmit={HendelSubmit}>
                <label>
                    <p>Title:</p>
                    <input
                        type="text"
                        value={userinput.title}
                        name='title'
                        onChange={setuserinput} />
                </label>
                <label>
                    <p>Body:</p>
                    <input
                        type="text"
                        value={userinput.body}
                        name='body'
                        onChange={setuserinput} />
                </label>
                <br /><br />
                <button type="submit">Submit</button>
            </form> */}
            <br />
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {List && List.map(
                        (post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>

        </div>
    )

}



export default PostList;
