import './Navigation.scss';

const sectionIds = ['1', '2', '3', '4', '5', '6'];

interface IProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: IProps) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="navigation">
      {sectionIds.map(id => (
        <button
          key={id}
          className={`navigation_btn ${
            activeSection === id ? 'navigation_btn-active' : ''
          }`}
          onClick={() => scrollToSection(id)}
        >
          <span></span>
        </button>
        // <li key={i}>
        //   <a href={`#${i}`} className="navigation_link"><span></span></a>
        // </li>
      ))}
    </nav>
  );
};

export default Navigation;
