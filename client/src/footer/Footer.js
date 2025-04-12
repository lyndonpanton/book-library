

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            {/* General, Tech Stack, Applications */}
            <section id="footer-main-links">
                <ul className="footer-main-link-list">
                    {/* Developer */}
                    <li className="footer-main-link">About Me</li>
                    <li className="footer-main-link">Website</li>
                    <li className="footer-main-link">GitHub</li>
                    <li className="footer-main-link">LinkedIn</li>
                </ul>
                <ul className="footer-main-link-list">
                    {/* Languages and frameworks */}
                    <li className="footer-main-link">JavaScript</li>
                    <li className="footer-main-link">ReactJS</li>
                    <li className="footer-main-link">CSS</li>
                    <li className="footer-main-link">NodeJS</li>
                    <li className="footer-main-link">MySQL</li>
                </ul>
                <ul className="footer-main-link-list">
                    {/* Packages and Libraries */}
                    <li className="footer-main-link">axios</li>
                    <li className="footer-main-link">body-parser</li>
                    <li className="footer-main-link">cors</li>
                    <li className="footer-main-link">dotenv</li>
                    <li className="footer-main-link">Fontawesome</li>
                    <li className="footer-main-link">express</li>
                    <li className="footer-main-link">mysql2</li>
                </ul>
                <ul className="footer-main-link-list">
                    {/* More Projects */}
                    <li className="footer-main-link">Film Library</li>
                    <li className="footer-main-link">???</li>
                    <li className="footer-main-link">???</li>
                    <li className="footer-main-link">???</li>
                </ul>
            </section>
            <section id="footer-sub-links">
                <section id="footer-sub-links-left">
                    <span>Privacy Policy</span>
                    <span>Terms and Conditions</span>
                    <span>Cookies</span>
                </section>
                <section id="footer-sub-links-right">
                    <span>Twitter: <i className="fa-brands fa-twitter"></i></span>
                    <span>Facebook: <i className="fa-brands fa-facebook"></i></span>
                    <span>Instagram: <i className="fa-brands fa-instagram"></i></span>
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
