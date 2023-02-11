//get the Data from Database
export function getPost(url) {
    return fetch(url).then(data => data.json())
}




//Posting Data into Database
export function setPost(url, item) {
    console.log(url, item)
    
    return fetch(url, {
        method: 'POST',
        Headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    }).then(data => data.json())

}