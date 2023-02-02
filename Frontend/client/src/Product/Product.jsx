import React from 'react';
import './main.css'
import Img from './Img'
import Info from './Info'

function Product(props) {
    return (
        <div className="card">
            <div className="left">
                <Img />
            </div>
            <div className="right">
                <Info />
            </div>
        </div>
    );
}

export default Product;