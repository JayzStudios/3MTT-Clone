import './Mission.css'
import fan from '../../assets/3mttFan5.png';

const Mission = () => {

    return (
        <div className='mission-container'>
            <div className='project-mission'>
                <h1>3MTT</h1>
                <p>
                The 3 Million Technical Talent (3MTT) programme, a critical part of the Renewed Hope agenda, is aimed at building Nigeria’s technical talent backbone to power our digital economy and position Nigeria as a net talent exporter. The first phase of the programme, executed in collaboration with NITDA, will involve multiple stakeholders including fellows, training providers, partners and placement organisations.
                </p>
            </div>
            <div  className='fanPhoto'>
              <img src={fan} alt="3MTT FAN" />
            </div>
        </div>
        



    );


}

export default Mission;