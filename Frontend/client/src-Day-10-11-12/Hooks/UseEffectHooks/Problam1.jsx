import React, { useEffect, useState } from 'react'

export default function Problam1() {
    const [text, setText] = useState('Demo');

    //Bad Example to  Change the title
    //document.title = text;

    useEffect(() => {
        document.title = text;
    }, [text]);


    let updateField = (e) => {
        let input = e.target.value;
        setText(input)
    }



    return (
        <React.Fragment>
            <input placeholder='Enter title ...........' onChange={updateField} />
        </React.Fragment>
    )
}
