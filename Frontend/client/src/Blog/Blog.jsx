import React from 'react';
import axios from 'axios'
import BlogForm from './BlogFrom'
import Bloglist from './Bloglist';


class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allPosts: [],
            editPost: {},
            isFormEditing: false
        }
    }
    
    createPost = (postData) => {
        let a = this.state.allPosts
        a.unshift(postData);
        axios.post('https://jsonplaceholder.typicode.com/posts',
            { postData })
            .then(res => {
                this.setState({
                    allPosts: a
                })
            })
    }

    getPost = (id) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    editPost: res.data,
                    isFormEditing: true
                })
            }
            );
    }

    updatePost = (postData, id) => {
        let a = this.state.allPosts.findIndex((i) => i.id == id);
        this.state.allPosts[a] = postData;
        axios.put('https://jsonplaceholder.typicode.com/posts/' + id,
            { postData })
            .then(res => {
                this.setState({
                    allPosts: this.state.allPosts,
                    editPost: {
                        title: '',
                        body: ''
                    }
                })
            })
    }


    render() {
        return (
            <>
                <BlogForm
                    onCreatePost={this.createPost}
                    formValues={this.state.editPost}
                    isFormEditing={this.state.isFormEditing}
                    updatePost={this.updatePost}
                />
                <hr />
                <Bloglist />
            </>
        );
    }
}

export default Blog;