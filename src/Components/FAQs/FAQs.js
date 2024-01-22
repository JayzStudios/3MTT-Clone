import './FAQs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';


const FAQs = () => {
    return(
        <div className='faq-container'>
            <h1>
                FAQs
            </h1>
            <div className='fellow-container'>
                <h2>
                    FAQs for Fellows
                </h2>
            </div>
            <div className='faq-fellow-table'>
                <ul className='faq-fellow-list'>
                    <p><FontAwesomeIcon className='plus-icon' icon={faPlus} size='lg' style={{color: "#000000",}} />
                    Are these the only skills that will be covered in the programme<FontAwesomeIcon className='arrow-right-icon' icon={faAngleRight} size='sm' style={{color: "#000000",}} />
                    </p>
                    <p><FontAwesomeIcon className='plus-icon' icon={faPlus} size='lg' style={{color: "#000000",}} />
                    How long will the training programs in this phase run?<FontAwesomeIcon className='arrow-right-icon' icon={faAngleRight} size='sm' style={{color: "#000000",}} />
                    </p>
                    <p><FontAwesomeIcon className='plus-icon' icon={faPlus} size='lg' style={{color: "#000000",}} />
                    Is physical attendance mandatory for the training sessions<FontAwesomeIcon className='arrow-right-icon' icon={faAngleRight} size='sm' style={{color: "#000000",}} />
                    </p>
                    
                </ul>
                <ul className='faq-fellow-list'>
                    <p><FontAwesomeIcon className='plus-icon' icon={faPlus} size='lg' style={{color: "#000000",}} />
                    Will I be required to write an entry assessment?<FontAwesomeIcon className='arrow-right-icon' icon={faAngleRight} size='sm' style={{color: "#000000",}} />
                    </p>
                    <p><FontAwesomeIcon className='plus-icon' icon={faPlus} size='lg' style={{color: "#000000",}} />
                    Is there a commitment fee required for selection?<FontAwesomeIcon className='arrow-right-icon' icon={faAngleRight} size='sm' style={{color: "#000000",}} />
                    </p>
                    <p><FontAwesomeIcon className='plus-icon' icon={faPlus} size='lg' style={{color: "#000000",}} />
                    Will there be financial support for transport, meals and other services in addition to the training?<FontAwesomeIcon className='arrow-right-icon' icon={faAngleRight} size='sm' style={{color: "#000000",}} />
                    </p>
                    
                </ul>
                
            </div>
            <div className='training-container'>
                <h2>
                    FAQs for Training Providers
                </h2>
            </div>
            <div className='faq-training-table'>
                <ul className='faq-training-list'>
                    <p><FontAwesomeIcon className='plus-icon' icon={faPlus} size='lg' style={{color: "#000000",}} />
                    Are these the only skills that will be covered in the programme<FontAwesomeIcon className='arrow-right-icon' icon={faAngleRight} size='sm' style={{color: "#000000",}} />
                    </p>
                    <p><FontAwesomeIcon className='plus-icon' icon={faPlus} size='lg' style={{color: "#000000",}} />
                    How long will the training programs in this phase run?<FontAwesomeIcon className='arrow-right-icon' icon={faAngleRight} size='sm' style={{color: "#000000",}} />
                    </p>
                    <p><FontAwesomeIcon className='plus-icon' icon={faPlus} size='lg' style={{color: "#000000",}} />
                    Is physical attendance mandatory for the training sessions<FontAwesomeIcon className='arrow-right-icon' icon={faAngleRight} size='sm' style={{color: "#000000",}} />
                    </p>
                    
                </ul>
                <ul className='faq-training-list'>
                    <p><FontAwesomeIcon className='plus-icon' icon={faPlus} size='lg' style={{color: "#000000",}} />
                    Will I be required to write an entry assessment?<FontAwesomeIcon className='arrow-right-icon' icon={faAngleRight} size='sm' style={{color: "#000000",}} />
                    </p>
                    <p><FontAwesomeIcon className='plus-icon' icon={faPlus} size='lg' style={{color: "#000000",}} />
                    Is there a commitment fee required for selection?<FontAwesomeIcon className='arrow-right-icon' icon={faAngleRight} size='sm' style={{color: "#000000",}} />
                    </p>
                    <p><FontAwesomeIcon className='plus-icon' icon={faPlus} size='lg' style={{color: "#000000",}} />
                    Will there be financial support for transport, meals and other services in addition to the training?<FontAwesomeIcon className='arrow-right-icon' icon={faAngleRight} size='sm' style={{color: "#000000",}} />
                    </p>
                    
                </ul>
                
            </div>
        </div>
    );
}
export default FAQs;


/*
COMMENT SECTION: 

<FontAwesomeIcon className='plus-icon' icon={faPlus} />;
<FontAwesomeIcon icon="fa-light fa-angle-right" />

display: flex;
flex-direction: column;


*/