import './Navigation.scss';

const arr = [1, 2, 3, 4, 5, 6];

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation_list">
        {arr.map(i => (
          <li key={i}>
            <a href={`#${i}`} className="navigation_link"><span></span></a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
