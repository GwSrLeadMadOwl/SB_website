import "./footer.css";
import MadOwl from "../../components/img/MadOwl logo.png";

const Footer = () => {
    const getYear = new Date();
    let year = getYear.getFullYear();
    return (
        <footer>
            <h3>{year}. All rights received</h3>
            <img src={MadOwl} alt="" className="mad-owl-logo" />
        </footer>
    );
};

export default Footer;