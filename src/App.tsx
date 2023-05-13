import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import AsideBar from './components/AsideBar/AsideBar';
// import RegistrationBaner from './components/RegistrationBaner/RegistrationBaner';

import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';

function App() {
  return (
    <>
      {/* <div className="app_overlay"> */}
      <AsideBar />
      <Header />
      <Navigation />
      {/* <RegistrationBaner /> */}
      {/* </div> */}
      <div className="app">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </>
  );
}

export default App;
