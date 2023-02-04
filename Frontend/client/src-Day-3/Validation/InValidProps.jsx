import React from 'react';
import './main.css'

const PercentageCal = ({ label, total, score }) => {
    return (
        <div className="basic-column w-col w-col-3">
            <div className="tag-wrapper">
                <div className="number-card number-card-content1">
                    <h1 className="number-card-number">{label}</h1>
                    <div className="number-card-dollars">{Math.round(score / total * 100)}%</div>
                    <div className="number-card-divider"></div>
                </div>
                <div className="divider"></div>
            </div>
        </div>
    )
}






function InValidProps(props) {
    return (
        <div className="row w-row">
            <PercentageCal label="Bitcoin" total={100} score={87} />
            <PercentageCal label="Bitcoin" total={0} score={87} />
            <PercentageCal label="Bitcoin" total={100} score={0} />
            <PercentageCal label="Bitcoin" />

            <PercentageCal label="" total={0} score={87} />
            <PercentageCal label="Bitcoin" total={0} />
            <PercentageCal label="Bitcoin" score={f => f} />
            <PercentageCal label="Bitcoin" total={{}} score="0" />
        </div>
    );
}

export default InValidProps;