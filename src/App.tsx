import { useEffect, useState } from 'react';

import Header from './modules/Header/Header';
import Navigation from './modules/Navigation/Navigation';
import AsideBar from './modules/AsideBar/AsideBar';
import CallModal from './modules/CallModal/CallModal';
// import RegistrationBaner from './components/RegistrationBaner/RegistrationBaner';

import NavModal from './modules/NavModal/NavModal';
// import { useSectionScroll } from './hooks/useSectionScroll';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutModal from './pages/AboutPage/AboutModal';
import GalleryPage from './pages/GalleryPage/GalleryPage';

const sectionIds = ['1', '2', '3', '4', '5', '6'];

function App() {
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

  // useSectionScroll(sectionIds);

  return (
    <>
      <AsideBar />
      <Header />
      <Navigation activeSection={activeSection} />

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route
            path="navigation"
            element={<NavModal activeSectionId={activeSection} />}
          />
          <Route path="call" element={<CallModal />} />
          <Route path="about" element={<AboutModal />} />
        </Route>
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </>
  );
}

export default App;
