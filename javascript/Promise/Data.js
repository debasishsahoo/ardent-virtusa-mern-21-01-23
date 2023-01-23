// async function FetchData() {
//     const response = await fetch('https://fakestoreapi.com/products')

//     const Data = await response.json()

//     console.table(Data)
// }

// FetchData()


const Produts = fetch('https://fakestoreapi.com/products').then(res => res.json())



