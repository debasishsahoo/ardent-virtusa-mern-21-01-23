const Posts = [
    { title: 'Title One', body: 'This is Post One' },
    { title: 'Title Two', body: 'This is Post Two' },
    { title: 'Title Three', body: 'This is Post Three' },
    { title: 'Title Four', body: 'This is Post Four' },
    { title: 'Title Five', body: 'This is Post Five' },
    { title: 'Title Six', body: 'This is Post Six' },
]

const getPosts = () => {
    //After page load it will be 1 sec delay to get all the Post

    setTimeout(() => {

        let output = '';
        //Prepair Single Object into Html list Element
        Posts.forEach((post) => {
            output += `<li>${post.title} ${post.body}</li>`;
        });
        //Add full list to Html Page
        document.body.innerHTML = output;


    }, 2000);




};

getPosts()

const createPost = (SinglePost) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (SinglePost.title.length > 0 && SinglePost.body.length > 0) {
                Posts.push(SinglePost);
                resolve();
            } else {
                reject('Title or Body not Present');
            }
        }, 5000);
    });





}

createPost({ title: 'Title Seven', body: 'This is Post Seven' })
    .then(getPosts)
    .catch((err) => { console.error(err) })


createPost({ title: '', body: 'This is Post Eigth' })
    .then(getPosts)
    .catch((err) => { console.error(err) })


createPost({ title: 'Title Nine', body: '' })
    .then(getPosts)
    .catch((err) => { console.error(err) })




