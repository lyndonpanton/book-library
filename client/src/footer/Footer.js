import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            {/* General, Tech Stack, Applications */}
            <section id="footer-main-links">
                <ul className="footer-main-link-list">
                    <li className="footer-main-link footer-main-link-heading">Developer Information</li>
                    <li className="footer-main-link">About Me</li>
                    <li className="footer-main-link">Website</li>
                    <li className="footer-main-link">GitHub</li>
                    <li className="footer-main-link">LinkedIn</li>
                </ul>
                <ul className="footer-main-link-list">
                    <li className="footer-main-link footer-main-link-heading">Languages and Frameworks</li>
                    <li className="footer-main-link">JavaScript</li>
                    <li className="footer-main-link">ReactJS</li>
                    <li className="footer-main-link">CSS</li>
                    <li className="footer-main-link">NodeJS</li>
                    <li className="footer-main-link">MySQL</li>
                </ul>
                <ul className="footer-main-link-list">
                    <li className="footer-main-link footer-main-link-heading">Packages and Libraries</li>
                    <li className="footer-main-link">axios</li>
                    <li className="footer-main-link">body-parser</li>
                    <li className="footer-main-link">cors</li>
                    <li className="footer-main-link">dotenv</li>
                    <li className="footer-main-link">Fontawesome</li>
                    <li className="footer-main-link">express</li>
                    <li className="footer-main-link">mysql2</li>
                </ul>
                <ul className="footer-main-link-list">
                    <li className="footer-main-link footer-main-link-heading">More Projects</li>
                    <li className="footer-main-link">Film Library</li>
                    <li className="footer-main-link">???</li>
                    <li className="footer-main-link">???</li>
                    <li className="footer-main-link">???</li>
                </ul>
            </section>
            <section id="footer-sub-links">
                <section>
                    <span className="footer-sub-link">Privacy Policy</span>
                    <span className="footer-sub-link">Terms and Conditions</span>
                    <span className="footer-sub-link">Cookies</span>
                </section>
                <section>
                    <span className="footer-sub-link"><FontAwesomeIcon className="footer-sub-icon" icon={ faTwitter } /></span>
                    <span className="footer-sub-link"><FontAwesomeIcon className="footer-sub-icon" icon={ faFacebook } /></span>
                    <span className="footer-sub-link"><FontAwesomeIcon className="footer-sub-icon" icon={ faInstagram } /></span>
                </section>
            </section>
            <p id="footer-copyright">
                &copy; { currentYear } Lyndon Mykal Panton |
                All Rights Reserved
            </p>
        </footer>
    );
}

export default Footer;
