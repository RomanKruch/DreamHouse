import { useState } from 'react';

import Header from './modules/Header/Header';
import Navigation from './modules/Navigation/Navigation';
import AsideBar from './modules/AsideBar/AsideBar';
import CallModal from './modules/CallModal/CallModal';
// import RegistrationBaner from './components/RegistrationBaner/RegistrationBaner';

import Section1 from './sections/Section1/Section1';
import Section2 from './sections/Section2/Section2';
import Section3 from './sections/Section3/Section3';
import Section4 from './sections/Section4/Section4';
// import Section5 from './sections/Section5/Section5';
// import Section6 from './sections/Section6/Section6';
import NavModal from './modules/NavModal/NavModal';

function App() {
  const [isOpenCall, setIsOpenCall] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <>
      <AsideBar />
      <Header
        isOpenCall={isOpenCall}
        setIsOpenCall={setIsOpenCall}
        isOpenNav={isOpenNav}
        setIsOpenNav={setIsOpenNav}
      />
      <Navigation />

      <CallModal isOpen={isOpenCall} setIsOpen={setIsOpenCall} />
      <NavModal isOpen={isOpenNav} setIsOpen={setIsOpenNav} />

      <div className="app">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        {/* <Section5 />
        <Section6 /> */}
      </div>
    </>
  );
}

export default App;
