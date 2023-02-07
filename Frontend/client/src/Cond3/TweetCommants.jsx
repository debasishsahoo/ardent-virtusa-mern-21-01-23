import React, { Children } from "react";

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
/* const TweetComments = (props) => {
    if (props.comments.length === 0) {
        return <div className="tweet-count">No Comments ...</div>
    } else {
        return (
            <div className="tweet-comments">
                <div className="tweet-count">
                    There are {props.comments.length} comments{" "}
                </div>
                <TweetList comments={props.comments} />
            </div>
        )
    }
} */

//!null & Gurd cluse
/* const TweetComments = (props) => {
    if (props.comments.length === 0) {
        return null
    }
    return (
        <div className="tweet-comments">
            <div className="tweet-count">
                There are {props.comments.length} comments{" "}
            </div>
            <TweetList comments={props.comments} />
        </div>
    )
} */

//!Using JSX
/* let Error = <span className="error">There was an Error,Please Fix</span>
const TweetComments = (props) => {
    if (props.comments.length === 0) {
        return (
            <div className="tweet-comments">
                {Error}
                <div className="tweet-count">
                    There are {props.comments.length} comments{" "}
                </div>
            </div>
        )
    }
    return (
        <div className="tweet-comments">
            <div className="tweet-count">
                There are {props.comments.length} comments{" "}
            </div>
            <TweetList comments={props.comments} />
        </div>
    )
}
 */

//!Ternary Operator
/* const TweetComments = (props) => {
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
} */

//!Short Circut
/* const TweetComments = (props) => {
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

            {Show && <TweetList comments={props.comments} />}
        </div>
    )
}
 */

//! IIFE
/* const TweetComments = (props) => {
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

            {(() => {
                if (!Show) return null;
                return (<TweetList comments={props.comments} />)
            })()}
        </div>
    )
} */

//! Custom Conditinal Component 1 & 2(2 is comming with Default children)

// const IF1 = ({ Condition, Children }) => {
//     if (Condition) return Children
//     return null
// };

// const IF2 = ({ Condition, children }) => { //! Default children
//     if (Condition) return children
//     return null
// };

// const TweetComments = (props) => {
//     const [Show, setShow] = React.useState(false);
//     console.log(Show)
//     if (props.comments.length === 0) {
//         return null
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//                 <button
//                     onClick={() => setShow(!Show)}>{Show ? "Hide" : "Show"}</button>
//             </div>

//             {/* Calling Option 1*/}
//             {/* <IF1 Condition={Show} Children={<TweetList comments={props.comments} />} /> */}

//             {/* Calling Option 2*/}
//             <IF2 Condition={Show}>
//                 <TweetList comments={props.comments} />
//             </IF2>


//         </div>
//     )
// }


//! HOC(Higher Order Component)

const CondComp = ({ Condition, children }) => {
    if (Condition) return children
    return null
}

//! in Console just type localStorage.setItem("user","dev")
const AuthGurd = (Component) => {
    if (localStorage.getItem('user')) {
        return (props) => <Component {...props} />
    }
    return () => <span className="error">Please Authenticated YourSelf</span>
}


const TweetComments = AuthGurd(
    (props) => {
        const [Show, setShow] = React.useState(false);
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
                <CondComp Condition={Show}>
                    <TweetList comments={props.comments} />
                </CondComp>
            </div>
        )
    }

);


const abc = AuthGurd()







// const TweetList = ({comments}) => {
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