import './Partners.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Partners = () => {
    return(
        <div className='partners-container'>
        <h1>Come partner with us</h1>
        <p>Funders, Corporates, Placement Organisations & others looking to be part of the programme.</p>
        <div className='button-class'>
        <button className='partners-button'>Partner With Us
            <FontAwesomeIcon className='playIcon' icon={faPlay} style={{color: "#ffffff"}} />
        </button>
        </div>
        
        </div>
    );
}
export default Partners;