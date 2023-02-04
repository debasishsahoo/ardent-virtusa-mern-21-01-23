import React from 'react';

class BlogFrom extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>Add your Blog Post</h2>
                    <label>Title:</label><br />
                    <input
                        type='text'
                        name='title'
                    />
                    <br />
                    <label>Body:</label><br />
                    <textarea
                        name='body'
                        rows={5}
                    />
                    <br />
                    <input type='submit' />
                </div >
            </React.Fragment>

        );
    }

}

export default BlogFrom;