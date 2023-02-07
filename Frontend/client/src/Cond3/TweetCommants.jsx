import React from "react";

//! Without Cond...
// const TweetComments = (props) => {
//     return (
//         <div className="tweet-comments">

//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//             </div>
//             <TweetList comments={props.comments} />
//         </div>
//     )
// }

//!if-else
// const TweetComments = (props) => {
//     if (props.comments.length === 0) {
//         return <div className="tweet-count">No Comments ...</div>
//     } else {
//         return (
//             <div className="tweet-comments">

//                 <div className="tweet-count">
//                     There are {props.comments.length} comments{" "}
//                 </div>
//                 <TweetList comments={props.comments} />
//             </div>
//         )
//     }
// }


//!null & Gurd cluse
// const TweetComments = (props) => {
//     if (props.comments.length === 0) {
//         return null
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//             </div>
//             <TweetList comments={props.comments} />
//         </div>
//     )
// }

//! Using JSX
// let Error = <span className="error">There was an Error,Please Fix</span>

// const TweetComments = (props) => {
//     if (props.comments.length === 0) {
//         return (
//             <div className="tweet-comments">
//                 {Error}
//                 <div className="tweet-count">
//                     There are {props.comments.length} comments{" "}
//                 </div>
//             </div>
//         )
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//             </div>
//             <TweetList comments={props.comments} />
//         </div>
//     )
// }


//! Ternary Operator

const TweetComments = (props) => {
    const [Show, setShow] = React.useState(false);
    console.log(Show)
    if (props.comments.length === 0) {
        return null
    }
    return (
        <div className="tweet-comments">
            <div className="tweet-count">
                There are {props.comments.length} comments{" "}
                <button
                    onClick={() => setShow(!Show)}>{Show ? "Hide" : "Show"}</button>
            </div>
            {
                Show ? <TweetList comments={props.comments} /> : null
            }

        </div>
    )
}













// const TweetList = ({ comments }) => {
//     <ul>
//         {comments.map((comment) => {
//             return (
//                 <li key={comment.user} className="tweet-comment">
//                     <span className="tweet-comment__name">{comment.name}</span>
//                     <span className="tweet-comment__user">{comment.user}</span>
//                     <p>{comment.text}</p>
//                 </li>
//             )
//         })}
//     </ul>

// }

const TweetList = ({ comments }) => (
    <ul>
        {comments.map((comment) => (
            <li key={comment.user} className="tweet-comment">
                <span className="tweet-comment__name">{comment.name}</span>
                <span className="tweet-comment__user">{comment.user}</span>
                <p>{comment.text}</p>
            </li>
        ))}
    </ul>
);

export default TweetComments