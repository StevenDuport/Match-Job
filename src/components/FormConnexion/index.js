/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeInputValue, submitLogin } from 'src/actions/user';
import './formConnexion.scss';
// import { X } from 'feather-icons';

const FormConnexion = () => {
  const dispatch = useDispatch();
  const valueEmail = useSelector((state) => state.user.email);
  const valuePassword = useSelector((state) => state.user.password);
  const { isAuthError, userCreated } = useSelector((state) => state.user);
  return (
    <div className="formConnexion">
      <div className="formConnexion_close">
        <Link
          to="/"
          className="formConnexion_close-Button"
        >
          x
        </Link>
      </div>
      <p className={userCreated ? 'insertSucces' : 'insertSucces-hidden'}>Compte créé, Vous pouvez vous connecter</p>
      <p className={isAuthError ? 'authError' : 'authError-hidden'}>Email ou mot de passe incorrect</p>
      <form
        autoComplete="off"
        className="loginForm"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(submitLogin());
        }}
      >
        <label
          className="loginForm_label"
        >
          Email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="loginForm_input"
          value={valueEmail}
          onChange={(event) => {
            dispatch(changeInputValue(event.target.value, 'email'));
          }}
        />
        <label
          className="loginForm_label"
        >
          Mot de passe :
        </label>
        <input
          type="password"
          name="password"
          value={valuePassword}
          placeholder="Mot de passe"
          className="loginForm_input"
          onChange={(event) => {
            dispatch(changeInputValue(event.target.value, 'password'));
          }}
        />
        <button
          type="submit"
          className="loginForm_submit"
        >
          Connexion
        </button>
      </form>
      <Link
        to="/inscription"
        className="formConnexion_linkSubscribe"
      >
        Vous n'êtes pas inscrit ? cliquez ici
      </Link>
    </div>
  );
};
export default FormConnexion;
