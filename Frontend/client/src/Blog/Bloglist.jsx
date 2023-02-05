import React from "react";
import axios from 'axios'



class Bloglist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allPosts: []
        }
    }

    componentDidMount() {
        this.fetchPost();
    }

    //Call the API for Geting the Blog Data
    fetchPost = () => {
        console.log('Fetching the Posts Started....')
        const API_URL = 'https://jsonplaceholder.typicode.com/posts';
        axios.get(API_URL)
            .then(res => {
                //console.log(res.data)
                this.setState({
                    allPosts: res.data
                })
            })
            .catch((error) => { console.log(error) })
    }


    render() {
        //console.log(this.state.allPosts)
        const PostItem = this.state.allPosts.map((item, index) => {
            return (<div key={index}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <button onClick={() => this.getPost(item.id)}>Edit</button>
            </div>);
        });

        return (
            <React.Fragment>
                <h2>All Blog</h2>
                {PostItem}
            </React.Fragment>
        )
    }
}
export default Bloglist