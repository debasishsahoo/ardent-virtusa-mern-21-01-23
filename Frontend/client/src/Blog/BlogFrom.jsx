import React from 'react';

class BlogFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: 0,
            id: 0,
            title: '',
            body: '',
            enteredValue: {}
        }
    }

    componentWillReceiveProps(newProps) {
        const recvdProps = JSON.stringify(newProps.formValues);
        const PropsNew = JSON.parse(recvdProps);
        this.setState({
            userid: PropsNew.userid,
            id: PropsNew.id,
            title: PropsNew.title,
            body: PropsNew.body
        })
    }

    onInputChange = (e) => {
        var enteredValue = {};
        enteredValue[e.target.name] = e.target.value;
        if (e.target.value != null) {
            this.setState({ enteredValue: enteredValue });
        }
    }

    onFormSubmit = (e) => {
        const { userid, id, title, body } = this.state ? this.state : { userid: 0, id: 0, title: "", body: "" }
        e.preventDefault();
        if (this.props.isFormEditing) {
            const post = {
                userid: userid,
                id: id,
                title: title,
                body: body
            }
            this.props.updatePost(post, this.props.formValues.id)
        }
        else {
            const post = {
                title: title,
                body: body
            }
            this.props.onCreatePost(post);
        }
    }



    render() {
        const { title, body } = this.state ? this.state : { title: "", body: "" };
        return (
            <React.Fragment>
                <div>
                    <h2>Add your Blog Post</h2>
                    <form onSubmit={this.onFormSubmit}>
                        <label>Title:</label><br />
                        <input
                            type='text'
                            name='title'
                            value={title}
                            onChange={this.onInputChange}
                        />
                        <br />
                        <label>Body:</label><br />
                        <textarea
                            name='body'
                            rows={5}
                            value={body}
                            onChange={this.onInputChange}
                        />
                        <br />
                        <input type='submit' />
                    </form>
                </div >
            </React.Fragment>

        );
    }

}

export default BlogFrom;