import React, { useContext } from 'react'
import BookData from './Data/BookData.js'
import CurrencyContext from './Context/Currency-context.jsx'

export default function DisplayBooks() {

    const currency = useContext(CurrencyContext)
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
                    {BookData.map((book, index) => (
                        <tr key={index}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{currency} {book.price}</td>
                        </tr>
                    ))}
                </tbody>

            </table>


        </div>
    )
}
