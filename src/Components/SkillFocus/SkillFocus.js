import './SkillFocus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

const SkillFocus = () => {

    return (
        <div className='focus-container'>
            <div className='focus-mission'>
                <h1>Skills in Focus</h1>
                <p>
                For the first phase, we will focus on these twelve (12) technical skills:
                </p>
            </div>
            <div className='focus-table'>
                <ul className='focus-table-list'>
                <p> <FontAwesomeIcon icon={faBullseye} className='skill-points-icon' size="xl" style={{color: "#26A65B",}} />
                    Software Development 
                </p>

                <p><FontAwesomeIcon icon={faBullseye} className='skill-points-icon' size="xl" style={{color: "#26A65B",}} />
                    UI/UX Design
                </p>
        
                <p><FontAwesomeIcon icon={faBullseye} className='skill-points-icon' size="xl" style={{color: "#26A65B",}} />
                    Data Analysis & Visualisation
                </p>
        
                <p><FontAwesomeIcon icon={faBullseye} className='skill-points-icon' size="xl"  style={{color: "#26A65B",}} />
                    Quality Assurance
                </p>
                </ul>
                <ul className='focus-table-list'>
                <p> <FontAwesomeIcon icon={faBullseye} className='skill-points-icon' size="xl" style={{color: "#26A65B",}} />
                 Product Management 
                </p>

                <p><FontAwesomeIcon icon={faBullseye} className='skill-points-icon' size="xl" style={{color: "#26A65B",}} />
                 Data Science
                </p>
        
                <p><FontAwesomeIcon icon={faBullseye} className='skill-points-icon' size="xl" style={{color: "#26A65B",}} />
                 Animation
                </p>
        
                <p><FontAwesomeIcon icon={faBullseye} className='skill-points-icon' size="xl"  style={{color: "#26A65B",}} />
                 AI / Machine Learning
                </p>
                </ul>
                <ul className='focus-table-list'>
                <p> <FontAwesomeIcon icon={faBullseye} className='skill-points-icon' size="xl" style={{color: "#26A65B",}} />
                 Cybersecurity
                </p>

                <p><FontAwesomeIcon icon={faBullseye} className='skill-points-icon' size="xl" style={{color: "#26A65B",}} />
                 Game Development
                </p>
        
                <p><FontAwesomeIcon icon={faBullseye} className='skill-points-icon' size="xl" style={{color: "#26A65B",}} />
                 Cloud Computing
                </p>
        
                <p><FontAwesomeIcon icon={faBullseye} className='skill-points-icon' size="xl"  style={{color: "#26A65B",}} />
                 Dev Ops
                </p>
                </ul>
                



            
            </div>
        </div>
        

    );


}

export default SkillFocus;

/*
    <p>Software Development</p>
            
    <p>UI/UX Design</p>

    <p>Data Analysis & Visualisation</p>

    <p>Quality Assurance</p>
*/