import './CallToAction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

//

const CallToAction = () => {


    return (
        
      <div className='cta-container'>
       <div className='cta-item-container'>
          <div className='cta-introduction'>Introducing the 3 Million Technical Talent Program</div>
          <div className='cta-text-header'>Shaping the Future of Nigeria's Digital Workforce</div>
          <div className='cta-program'>The 3MTT programme by the Federal Ministry of Communications, Innovation & Digital Economy will generate a pipeline of technical talent in line with President Bola Ahmed Tinubu’s vision of creating 2 million digital jobs by 2025.</div>
          <button className='readMore'>Read More
          <FontAwesomeIcon className='playIcon' icon={faPlay} style={{color: "#ffffff"}} />
          </button>
       </div> 
      
       
      </div>
      
                 
    );
 
}



export default CallToAction;
