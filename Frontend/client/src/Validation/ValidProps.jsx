import React from 'react';
import './main.css'
import PropTypes from 'prop-types';

const PercentageCal = ({ label = 'Label', score = 0, total = Math.max(1, score) }) => {
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

function isNumeric(value) {
    const regex = /^(\+|-)?((\d*\.?\d+)|(\d+\.?\d*))$/;
    return (
        Number.isFinite(value) || (typeof value === 'string' && regex.test(value))
    )
}

function isNonZero(value) {
    return +value !== 0;
}

function validationType(...validators) {
    return ((props, propName, componentName) => {

        const value = props[propName];

        const valid = validators.every((validator) => {
            if (typeof validator === 'function') {

                const result = validator(value)
                return typeof result === 'boolean' && result;
            }

            return false;
        });


        if (!valid) {
            return new Error(
                `Invalid Props:${propName} send to Component:${componentName}. Validation Failed`
            )
        }






    });
}


PercentageCal.propTypes = {

    label: PropTypes.string.isRequired,
    score: validationType(isNumeric),
    total: validationType(isNumeric, isNonZero)
}

function ValidProps(props) {
    return (
        <div className="row w-row">
            <PercentageCal label="Bitcoin" total={100} score={87} />

            {/* <PercentageCal label="Bitcoin" total={0} score={87} /> */}

            {/* <PercentageCal label="Bitcoin" total={0} score={0} /> */}

            <PercentageCal label="Bitcoin" />


            {/* <PercentageCal label="Bitcoin" total={100} score={0} />
            

            <PercentageCal label="" total={0} score={87} />
            <PercentageCal label="Bitcoin" total={0} />
            <PercentageCal label="Bitcoin" score={f => f} />
            <PercentageCal label="Bitcoin" total={{}} score="0" /> */}
        </div>
    );
}

export default ValidProps;