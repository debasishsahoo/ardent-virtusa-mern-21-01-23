import React from 'react'
import BookData from './BookData.js'

export default function DisplayBooks() {
    return (
        <div>
            {/* <ul>
                {BookData.map((book, index) => (
                    <li key={index}>{book.title}  - {book.price}</li>
                ))}
            </ul> */}

            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Book</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {BookData.map((book, index) => (
                        <tr key={index}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.price}</td>
                        </tr>
                    ))}
                </tbody>

            </table>


        </div>
    )
}
