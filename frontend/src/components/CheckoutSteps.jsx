import React from 'react';
import './CheckoutSteps.css';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <nav className="checkout-steps">
            <div className={`step ${step1 ? 'active' : ''}`}>
                <div className="step-count">1</div>
                <div className="step-label">Login</div>
            </div>
            <div className={`step-line ${step2 ? 'active' : ''}`}></div>
            <div className={`step ${step2 ? 'active' : ''}`}>
                <div className="step-count">2</div>
                <div className="step-label">Shipping</div>
            </div>
            <div className={`step-line ${step3 ? 'active' : ''}`}></div>
            <div className={`step ${step3 ? 'active' : ''}`}>
                <div className="step-count">3</div>
                <div className="step-label">Payment</div>
            </div>
            <div className={`step-line ${step4 ? 'active' : ''}`}></div>
            <div className={`step ${step4 ? 'active' : ''}`}>
                <div className="step-count">4</div>
                <div className="step-label">Place Order</div>
            </div>
        </nav>
    );
};

export default CheckoutSteps;
