import { Link } from 'react-router-dom';

import './error403.scss';

const Error403 = () => (
  <div className="error">
    <p className="error_type">Erreur 403</p>
    <p className="error_content">Vous n'êtes pas autorisé à consulter cette page !</p>
    <p className="error_content">Veuillez vous authentifiez ou creer un compte utilisateur</p>
    <Link
      to="/"
      className="error_link"
    >
      Retour à la page d'accueil
    </Link>
  </div>
);

export default Error403;
