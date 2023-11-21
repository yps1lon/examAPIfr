import React from "react";
import { Link } from "react-router-dom";
import EmailForm from "./emailForm.js";

function Footer() {
    return (
        <div id="footer">
            <div className="footer_link--holder-solutions">
                <h4 className="solutions">
                    <p>Solutions</p>
                </h4>
                <li className="solution-links">
                    <Link to="#">For Enterprise</Link>
                </li>
                <li className="solution-links">
                    <Link to="#">For Startups</Link>
                </li>
                <li className="solution-links">
                    <Link to="#">For Individuals</Link>
                </li>
            </div>
            <div className="footer_link-holder">
                <h4 className="company">
                    <p>About</p>
                </h4>
                <li className="company_links">
                    <Link to="#">Ticketing</Link>
                </li>
                <li className="company_links">
                    <Link to="#">Careers</Link>
                </li>
                <li className="company_links">
                    <Link to="#">About</Link>
                </li>
                <li className="company_links">
                    <Link to="#">FAQ</Link>
                </li>
            </div>
            <div className="newsletter_sign--up">
                <h3 className="subscribe">Subscribe to our Newsletter</h3>
                <p className="newsletter_text">
                    We promise we won't spam your email too much! ❤️️
                </p>
                <p className="sign_up">
                    Enter your email to sign up
                </p>
                <EmailForm />
            </div>
        </div>
    );
}

export default Footer;