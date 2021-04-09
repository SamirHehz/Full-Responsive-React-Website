import React from 'react'
import {Button} from '../components/Button'
import './Footer.css';
function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the adventure newslatter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <form className="input-areas">
                    <input className="footer-input" type="email" name="email" placeholder="Your e-mail"></input>
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </section>
        </div>
    )
}

export default Footer
