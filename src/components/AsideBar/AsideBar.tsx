import './AsideBar.scss';
import logo from '../../assets/logo.png';
import FacebookIcon from '../../assets/icons/facebook_icon';
import InstagramIcon from '../../assets/icons/instagram_icon';
import YoutubeIcon from '../../assets/icons/youtube_icon';
import TelegramIcon from '../../assets/icons/telegram_icon';

const icons = [FacebookIcon, InstagramIcon, YoutubeIcon, TelegramIcon];

const AsideBar = () => {
  return (
    <aside className="asideBar">
      <img
        src={logo}
        alt="logo"
        width={50}
        height={57}
        className="asideBar_logo"
      />

      <p className="asideBar_title">apartment renovation</p>

      <div className="asideBar_line"></div>

      <ul className="asideBar_list">
        {icons.map(El => (
          <li key={El.name}>
            <a className="asideBar_link">
              <El />
            </a>
          </li>
        ))}
        {/* <a className="asideBar_link">
          <FacebookIcon />
        </a>
        <a className="asideBar_link">
          <InstagramIcon />
        </a>
        <a className="asideBar_link">
          <YoutubeIcon />
        </a>
        <a className="asideBar_link">
          <TelegramIcon />
        </a> */}
      </ul>
    </aside>
  );
};

export default AsideBar;
