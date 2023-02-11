import React from 'react'
import Book from './Book'


export default function DisplayBooks({ list }) {

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Book</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => (
                        <Book key={item.id} list={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
