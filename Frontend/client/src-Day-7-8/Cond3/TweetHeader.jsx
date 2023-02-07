import React from 'react';
import Img from './Img/profile.jpeg'

function TweetHeader(props) {

    const custStyle = {
        //backgroundColor: 'red'
    }
    return (
        <div className="tweet-header" style={custStyle}>
            <img src={Img} alt="avater" />

            <div>
                <span className='tweet-header__name'>leigh Halliday</span>
                <span className='tweet-header__name'>@leighchalliday</span>
            </div>

        </div >
    );
}

export default TweetHeader;