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
                    <li className="footer-main-link">
                        <a href="" target="_blank">About Me</a>
                    </li>
                    <li className="footer-main-link">
                        <a href="" target="_blank">Website</a>
                    </li>
                    <li className="footer-main-link">
                        <a href="" target="_blank">GitHub</a>
                    </li>
                    <li className="footer-main-link">
                        <a href="https://www.linkedin.com/in/lyndonpanton/" target="_blank">LinkedIn</a>
                    </li>
                </ul>
                <ul className="footer-main-link-list">
                    <li className="footer-main-link footer-main-link-heading">Languages and Frameworks</li>
                    <li className="footer-main-link">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>
                    </li>
                    <li className="footer-main-link">
                        <a href="https://react.dev/" target="_blank">ReactJS</a></li>
                    <li className="footer-main-link">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a></li>
                    <li className="footer-main-link">
                        <a href="https://nodejs.org/" target="_blank">NodeJS</a></li>
                    <li className="footer-main-link">
                        <a href="https://www.mysql.com/" target="_blank">MySQL</a></li>
                </ul>
                <ul className="footer-main-link-list">
                    <li className="footer-main-link footer-main-link-heading">Managers, Packages and Libraries</li>
                    <li className="footer-main-link">
                        <a href="https://www.npmjs.com/" target="_blank">NPM</a>
                    </li>
                    <li className="footer-main-link">
                        <a href="https://axios-http.com" target="_blank">axios</a></li>
                    <li className="footer-main-link">
                        <a href="https://www.npmjs.com/package/body-parser" target="_blank">body-parser</a></li>
                    <li className="footer-main-link">
                        <a href="https://www.npmjs.com/package/cors" target="_blank">cors</a></li>
                    <li className="footer-main-link">
                        <a href="https://www.npmjs.com/package/dotenv" target="_blank">dotenv</a></li>
                    <li className="footer-main-link">
                        <a href="https://fontawesome.com/" target="_blank">Fontawesome</a></li>
                    <li className="footer-main-link">
                        <a href="https://expressjs.com/" target="_blank">express</a></li>
                    <li className="footer-main-link">
                        <a href="https://www.npmjs.com/package/mysql2" target="_blank">mysql2</a></li>
                </ul>
                <ul className="footer-main-link-list">
                    <li className="footer-main-link footer-main-link-heading">Other Projects</li>
                    <li className="footer-main-link"><a href="">Film Library</a></li>
                    <li className="footer-main-link"><a href="">???</a></li>
                    <li className="footer-main-link"><a href="">???</a></li>
                    <li className="footer-main-link"><a href="">???</a></li>
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
