import React from 'react';
import './main.css'

class Card extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            img: 'https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png',
            name: 'No name',
        }

    }

    Male = () => {
        this.setState({
            img: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Debasish Sahoo'
        });
    }

    Female = () => {
        this.setState({
            img: 'https://www.w3schools.com/howto/img_avatar2.png',
            name: 'x'
        });
    }
    // 

    render() {
        return (
            <div className="w3-container" >
                <h2>Card Example</h2>
                <div className="w3-card-4 w3-dark-grey" style={{ width: "20%" }}>
                    <div className="w3-container w3-center">
                        <h3>Friend Request</h3>
                        <img src={this.state.img} alt="Avatar" style={{ width: "80%" }} />
                        <h5>{this.state.name}</h5>

                        <div className="w3-section">
                            <button className="w3-button w3-green" onClick={this.Male}>Male</button>
                            <button className="w3-button w3-red" onClick={this.Female}>Female</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Card;