import { useState } from 'react';

import Header from './modules/Header/Header';
import Navigation from './components/Navigation/Navigation';
import AsideBar from './modules/AsideBar/AsideBar';
import CallModal from './modules/CallModal/CallModal';
// import RegistrationBaner from './components/RegistrationBaner/RegistrationBaner';

import Section1 from './sections/Section1/Section1';
import Section2 from './sections/Section2/Section2';
import Section3 from './sections/Section3/Section3';
import Section4 from './sections/Section4/Section4';
import Section5 from './sections/Section5/Section5';
import Section6 from './sections/Section6/Section6';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <div className="app_overlay"> */}
      <AsideBar />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navigation />
      {/* <RegistrationBaner /> */}
      {/* </div> */}
      <CallModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="app">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </>
  );
}

export default App;
