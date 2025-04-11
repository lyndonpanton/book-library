function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p id="copyright">
                &copy; { currentYear } Lyndon Mykal Panton |
                All Rights Reserved
            </p>
        </footer>
    );
}

export default Footer;
