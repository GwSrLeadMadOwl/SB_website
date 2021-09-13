import "./navbar.css";

const Navbar = () => {
    return (
        <div className="nav-bar">
            {/* <a data-menuanchor="home" href="#home"><img src="logo" alt="logo" /></a> */}
            <ul id="myMenu" className="links">
                <li data-menuanchor="home"><a href="#home">MAIN</a></li>
                <li data-menuanchor="video"><a href="#video">VIDEO</a></li>
                <li data-menuanchor="art"><a href="#art">ART</a></li>
                <li data-menuanchor="blogs"><a href="#blogs">BLOGS</a></li>
                <li data-menuanchor="social"><a href="#social">SOCIAL</a></li>
            </ul>
        </div>
    );
};

export default Navbar;