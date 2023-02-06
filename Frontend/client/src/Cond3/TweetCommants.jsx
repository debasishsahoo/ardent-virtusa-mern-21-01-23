import React from "react";

const TweetComment = (props) => {
    return (
        <div className="tweet-comments">
            <div className="tweet-count">
                There are {props.comments.length} comments{" "}
            </div>
            <TweetList comments={props.comments} />
        </div>
    )

}


const TweetList = ({ comments }) => {
    <ul>
        {comments.map((comment) => {
            return (
                <li key={comment.user} className="tweet-comment">
                    <span className="tweet-comment__name">{comment.name}</span>
                    <span className="tweet-comment__name">{comment.user}</span>
                    <p>{comment.text}</p>
                </li>
            )

        })}
    </ul>

}

export default TweetComment