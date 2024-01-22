import './App.css';
import Header from '../src/Components/Header/Header';
import CallToAction from '../src/Components/CallToAction/CallToAction';
import Mission from '../src/Components/Mission/Mission';
import FirstPhase from '../src/Components/FirstPhase/FirstPhase';
import SkillFocus from '../src/Components/SkillFocus/SkillFocus';
import Apply from '../src/Components/Apply/Apply';
import Partners from './Components/Partners/Partners';
import FAQs from './Components/FAQs/FAQs';


function App() {
  return (
    <div className="App">
      <Header />
      <CallToAction />
      <Mission />
      <FirstPhase />
      <SkillFocus />
      <Apply />
      <Partners />
      <FAQs />
      <div className="copy-rights">
          <p>
           Copyright © 2023 3 Million Technical Talent | Powered by FMCIDE and Jayz Studios
          </p>
      </div>
      
    </div>
  );
}

export default App;
