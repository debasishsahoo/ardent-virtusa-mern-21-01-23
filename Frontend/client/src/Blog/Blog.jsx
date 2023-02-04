import React from 'react';
import BlogForm from './BlogFrom'
import Bloglist from './Bloglist';


class Blog extends React.Component {
    constructor(props) {
        super(props)
    }



    ////Call the API for Geting the Blog Data
    // fetchPost = () => {
    //     console.log('Fetching the Posts Started....')
    //     const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             //console.log(res.data)
    //             this.setState({
    //                 allPost: res.data
    //             })
    //         })
    //         .catch((error) => { console.log(error) })
    // }

    render() {

        return (
            <>
                <BlogForm />
                <hr />
                <Bloglist />
            </>
        );
    }



}

export default Blog;