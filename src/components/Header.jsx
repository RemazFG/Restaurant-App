import Icon from "./icons/Icon"

const navLinks =[
    { href: "#hero", lable: "Home"},
    { href: "#menu", lable: "Menu"},
    { href: "#about", lable: "About"},
]

const Header = () => {
    return(
        <header className="site-header">
            <div className="site-header_inner">
                <a href="#hero" className="brand">
                <Icon id="logo-mark" className="brand_mark" />
                    <span>The Golden Spoon</span>
                </a>

                {/* header links */}        
                <nav className="main-nav">
                    {navLinks.map((link) => (
                    <a key={link.href} href={link.href}>
                    {link.lable}</a>
                ))}
                </nav>

                {/* cart button */}
                <button className="cart-btn cart-btn" type="button">
                <Icon id={"cart-icon"} />
                <span className="cart-btn_badge">3</span>
                </button>
            </div>
        </header>
    )
}

export default Header;