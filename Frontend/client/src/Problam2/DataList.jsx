const List1 = [
    {
        id: 1,
        firstname: 'Debasish',
        lastname: 'Sahoo',
        dob: 1990
    },
    {
        id: 2,
        firstname: 'Arnab',
        lastname: 'Sahoo',
        dob: 1993
    }
]

const List2 = [
    {
        id: 1,
        firstname: 'Rahul',
        lastname: 'Sahoo',
        dob: 1990
    },
    {
        id: 2,
        firstname: 'Rajib',
        lastname: 'Sahoo',
        dob: 1993
    }
]



//! please Implement map function and Show the Data on frontend proptype also
const nestedList = [List1, List2]



const NestedList = () => {
    <ul>
        {
            nestedList.map((list, index) => (
                <ul key={index}>
                    <h4>List {index + 1}</h4>
                    {
                        list.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div>{item.firstname}</div>
                                    <div>{item.lastname}</div>
                                    <div>{item.dob}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            ))
        }
    </ul>



}

export default NestedList