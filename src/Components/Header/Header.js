import logo from '../../assets/nitda_logo_big.png';
import './Header.css'


const Header = () => {

    return (
        <div className='header-container'>
            <img src={logo} alt="NITDA Logo" />
            <div className='menu-container'>
                <h4>About 3MTT</h4>
                <h4>How to Apply</h4>
                <h4>FAQs</h4>
                <button className="login-button">Login</button>

            </div>
        </div>
    );
   
}

export default Header;