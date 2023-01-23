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

const createPost = (SinglePost, callback) => {

    setTimeout(() => {
        if (SinglePost.title.length > 0 && SinglePost.body.length > 0) {
            Posts.push(SinglePost);
            callback();
        } else {
            //alert('Title or Body not Present');
            console.log('Title or Body not Present')
        }


    }, 5000);


}

createPost({ title: 'Title Seven', body: 'This is Post Seven' }, getPosts)
createPost({ title: 'Title Eight', body: 'This is Post Eight' }, getPosts)
createPost({ title: 'Title Nine', body: 'This is Post Nine' }, getPosts)
createPost({ title: '', body: 'This is Post Ten' }, getPosts)

