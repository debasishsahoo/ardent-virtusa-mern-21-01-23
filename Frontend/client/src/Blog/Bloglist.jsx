import React from "react";
import axios from 'axios'


class Bloglist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allPost: []
        }

    }
    componentDidMount() {
        this.fetchPost();
    }

    fetchPost = () => {
        console.log('Fetching the Posts Started....')
        const API_URL = 'https://jsonplaceholder.typicode.com/posts';
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                //console.log(res.data)
                this.setState({
                    allPost: res.data
                })
            })
            .catch((error) => { console.log(error) })
    }



    render() {
        const PostItem = this.state.allPost.map((item, index) => {
            <div key={index}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
            </div>
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