import { Link } from 'react-router-dom';

import './error.scss';

const Error = () => (
  <div className="error">
    <p className="error_type">Error 404</p>
    <p className="error_content">La page que vous cherchez n'existe pas !! </p>
    <Link
      to="/"
      className="error_link"
    >
      Retour à la page d'accueil
    </Link>
  </div>
);

export default Error;
