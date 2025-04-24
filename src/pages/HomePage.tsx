import { Outlet } from 'react-router-dom';
import Section1 from '../sections/Section1/Section1';
import Section2 from '../sections/Section2/Section2';
import Section3 from '../sections/Section3/Section3';
import Section4 from '../sections/Section4/Section4';
import Section5 from '../sections/Section5/Section5';
import Section6 from '../sections/Section6/Section6';

const HomePage = () => {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
      <Section6 />

      <Outlet />
    </main>
  );
};

export default HomePage;
