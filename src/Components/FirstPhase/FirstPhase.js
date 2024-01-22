import './FirstPhase.css';
import lady1 from '../../assets/lady_talk3mtt2.png';
import lady2 from '../../assets/lady_talk3mtt hijab.png';


const FirstPhase = () => {

    return (
        <div className='first-phase-container'>
            <div className='first-phase-project'>
                <h1>Join us on a transformative journey as we unveil the 3MTT Programme Fellowship</h1>
                
                <p>
                 The first phase of the programme will be executed as a fellowship model in collaboration with NITDA. We will select individuals with interest in specific skills and fund the cost of their training with training providers accepted into the programme.
                </p>

                <img className='first-phase-img-hijab' src={lady2} alt="Lady Talk 3MTT Hijab" />
            </div>
            <div className='first-phase-img'>
                <img src={lady1} alt="Lady Talk 3MTT" />
            
                <p>
                    In line with the Ministry's 1%-10%-100% implementation approach, this first phase will aim to train and place 30,000 technical talents, representing 1% of our overall target. It will be executed based on the framework co-created with key stakeholders across government agencies, training providers, educational institutions, development agencies and the private sector.
                </p>
               
           </div>

            
        </div>
        



    );


}

export default FirstPhase;

/*
    <img className='first-phase-img-hijab' src={lady2} alt="Lady Talk 3MTT Hijab" />
    <div className='first-phase-img-hijab'>
     <img src={lady2} alt="Lady Talk 3MTT Hijab" /> 
               
                 
    </div>
*/ 
