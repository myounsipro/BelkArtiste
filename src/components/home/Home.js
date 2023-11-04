import logo from './../../logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Belcaricature
        </p>
        <a
          className="Home-link"
          href="https://www.facebook.com/people/belkacem-caricatures/100050603164367/"
          target="_target"
          rel="noopener noreferrer"
        >
          Belkacem YOUNSI
        </a>
      </header>
    </div>
  );
}

export default Home;