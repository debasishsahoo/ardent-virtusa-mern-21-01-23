import './main.css'
import TweetHeader from './TweetHeader';
import TweetBody from './TweetBody';
import TweetComments from './TweetCommants';

const comments = [
    // {
    //     name: "Andrew Anderson",
    //     user: "@anderson",
    //     text: "If / Else... return the entire value",
    // },
    // {
    //     name: "Brit Beckers",
    //     user: "@beckers",
    //     text: "Return null when you want nothing to render",
    // },
    // {
    //     name: "Corey Crimson",
    //     user: "@crimson",
    //     text: "Element variables: store JSX in a variable",
    // },
    // {
    //     name: "Dennis Dewey",
    //     user: "@dewey",
    //     text: "Ternaries, take your if statements inline",
    // },
    // {
    //     name: "Eric Eckersley",
    //     user: "@eckersley",
    //     text: "Short-Circuit && display if truthy",
    // },
    // {
    //     name: "Fred Farmer",
    //     user: "@farmer",
    //     text: "Immediately Invoked Function Expression",
    // },
    // {
    //     name: "Georgina Garland",
    //     user: "@garland",
    //     text: "Use sub-components when appropriate",
    // },
    // {
    //     name: "Hank Hacker",
    //     user: "@hacker",
    //     text: "Create your own If components",
    // },
    // {
    //     name: "Isabel Island",
    //     user: "@island",
    //     text: "HOCs to control whether component is rendered",
    // },
];

const Tweet = () => {
    return (
        <div className="tweet">
            <TweetHeader />
            <TweetBody />
            <TweetComments comments={comments} />
        </div>
    )

}

export default Tweet;