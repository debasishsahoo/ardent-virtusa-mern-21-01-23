import React from 'react'
import UserFetchData from './CustomHooks'

export default function User() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const { data } = UserFetchData(url)
    return (
        <React.Fragment>

            
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(
                        (user) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </React.Fragment>
    )
}
