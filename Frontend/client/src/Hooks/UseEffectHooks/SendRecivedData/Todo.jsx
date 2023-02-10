import React, { useState, useEffect, useRef } from "react";
import { getList, setList } from './Service'

function PostList() {
    const URL = 'https://jsonplaceholder.typicode.com/posts';

    const [List, setList] = useState('')


    useEffect(() => {
        getList(URL).then(post => setList(post))
    }, [List]);

    return (
        <div>
            <h1>My ToDO List</h1>
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
                            <tr>
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
