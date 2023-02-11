import React, { useState } from "react";


const UseStateHooks3 = () => {

    const person = {
        name: 'Debasish Sahoo',
        study: 'CSE',
        age: 35,
        ismale: true
    }

    const [Student, setStudent] = useState(person);

    console.log(Student)



    // const NameSet = useState('Debasish')

    // let a = NameSet[0]
    // //console.log('a:', a)

    // let b = NameSet[1]
    // //console.log('b:', b)



    const updateStudent = () => {
        setStudent(e => {
            console.log(e)
            return { ...e, name: 'Syani Dhar', ismale: false }
        })
    }

    return (
        <div>
            <p>My Name is <b>{Student.name}</b> and i am a <b>{Student.study}</b> Student</p>
            <p>I am <b>{Student.age}</b> Years Old {(Student.ismale) ? '👨' : '👧'}</p>
            <br />
            <button onClick={updateStudent}>Update Female</button>
            <button onClick={updateStudent}>Update Male</button>
        </div>
    )

}

export default UseStateHooks3