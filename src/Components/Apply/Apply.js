import './Apply.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import man from '../../assets/man_3mtt7.png';
import lady from '../../assets/lady_3mtt7.png';


const Apply = () => {

    return (
        <div className='apply-container'>
           <h1>Build the workforce of the future</h1>
           <p>
           We are calling on individuals and training providers across Nigeria to apply to the first phase of the 3MTT programme.
           </p>
          
           <div className='apply-border-box'>
           <div className='apply-lady-lecturer'>
                <img src={lady} alt="Lady Lecturer 3MTT" />
                <h2>
                 For Fellows
                </h2>
                <p>
                You will receive training in specific technical skills that will empower you to be competitive in the local and global technical talent marketplace
                </p>
                <button className='apply-here-button'>Apply Here
                <FontAwesomeIcon className='playIcon' icon={faPlay} style={{color: "#ffffff"}} />
                </button>
               </div>
               <div className='apply-man-lecturer'>
                <img src={man} alt="Man Lecturer 3MTT" />
                <h2>
                 For Training Providers
                </h2>
                <p>
                    Organisations looking to join our pool of training providers to train 30,000 fellows across Nigeria as we design an optimal approach to training and placing technical talents
                </p>
                <button className='apply-here-button'>Apply Here
                <FontAwesomeIcon className='playIcon' icon={faPlay} style={{color: "#ffffff"}} />
                </button>
               </div> 
           </div>
        </div>
    );

}

export default Apply;
