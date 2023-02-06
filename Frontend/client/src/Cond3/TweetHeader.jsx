import React from 'react';

function TweetHeader(props) {

    const custStyle = {
        backgroundColor: 'red'
    }
    return (
        <div className="tweet-header" style={custStyle}>
            <img src="https://pbs.twimg.com/profile_images/527868739207708672/quLiBx7p_reasonably_small.jpeg" alt="avater" />

            <div>
                <span className='tweet-header__name'>leigh Halliday</span>
                <span className='tweet-header__name'>@leighchalliday</span>
            </div>

        </div >
    );
}

export default TweetHeader;