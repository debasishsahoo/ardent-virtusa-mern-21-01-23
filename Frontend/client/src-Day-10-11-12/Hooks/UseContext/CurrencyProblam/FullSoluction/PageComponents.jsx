import React, { useState } from "react";
import Books from './Books'
import BookData from '../Data/BookData'
import CurrencyContext from "../Context/Currency-context";
import Currency from '../Data/Currency'


export default function PageBook() {
    const [currency, setCurrency] = useState('₹')

    return (
        <>
            <CurrencyContext.Provider value={currency}>



                <button type="button" onClick={() => setCurrency('₹')}>Ruppy</button>
                <button type="button" onClick={() => setCurrency('€')}>Euro</button>
                <button type="button" onClick={() => setCurrency('$')}>Dollor</button>



                <br />
                <Books list={BookData} />

            </CurrencyContext.Provider>
        </>
    )
}