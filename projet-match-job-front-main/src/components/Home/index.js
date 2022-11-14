import 'src/components/Home/home.scss';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <p className="home-slogan">N'attendez plus ...</p>
    <p className="home-slogan">Trouver le Job ou le Candidat de vos rêves !</p>
    <Link
      to="/connexion"
      className="home-connect"
    >
      Connexion
    </Link>
    <Link
      to="/inscription"
      className="home-subscribe"
    >
      Inscription
    </Link>
  </div>
);

export default Home;
