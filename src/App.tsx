import { useEffect, useState } from 'react';

import Header from './modules/Header/Header';
import Navigation from './modules/Navigation/Navigation';
import AsideBar from './modules/AsideBar/AsideBar';
import CallModal from './modules/CallModal/CallModal';
// import RegistrationBaner from './components/RegistrationBaner/RegistrationBaner';

import Section1 from './sections/Section1/Section1';
import Section2 from './sections/Section2/Section2';
import Section3 from './sections/Section3/Section3';
import Section4 from './sections/Section4/Section4';
import Section5 from './sections/Section5/Section5';
import Section6 from './sections/Section6/Section6';
import NavModal from './modules/NavModal/NavModal';
import { useSectionScroll } from './hooks/useSectionScroll';

const sectionIds = ['1', '2', '3', '4', '6'];

function App() {
  const [isOpenCall, setIsOpenCall] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const [activeSection, setActiveSection] = useState<string>('1');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // змінити чутливість
      },
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useSectionScroll(sectionIds);

  return (
    <>
      <AsideBar />
      <Header
        isOpenCall={isOpenCall}
        setIsOpenCall={setIsOpenCall}
        isOpenNav={isOpenNav}
        setIsOpenNav={setIsOpenNav}
      />
      <Navigation activeSection={activeSection} />

      <CallModal isOpen={isOpenCall} setIsOpen={setIsOpenCall} />
      <NavModal isOpen={isOpenNav} setIsOpen={setIsOpenNav} />

      <div className="app">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        {/* <Section5 /> */}
        <Section6 />
      </div>
    </>
  );
}

export default App;
