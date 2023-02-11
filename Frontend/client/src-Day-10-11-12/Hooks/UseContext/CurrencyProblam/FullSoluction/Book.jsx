import React, { useContext } from 'react'
import CurrencyContext from '../Context/Currency-context'

export default function Book({ list }) {
    const currency = useContext(CurrencyContext)
    return (
        <tr>
            <td>{list.id}</td>
            <td>{list.title}</td>
            <td>{currency}{list.price}</td>
        </tr>
    )
}
