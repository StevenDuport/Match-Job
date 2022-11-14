/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector, useDispatch } from 'react-redux';
import './formSubscribe.scss';
import { Link, useNavigate } from 'react-router-dom';
import { changeInputValue, submitSubscribe } from 'src/actions/user';
// import { X } from 'feather-icons';

const FormSubscribe = () => {
  const dispatch = useDispatch();
  const valueEmail = useSelector((state) => state.user.email);
  const valuePassword = useSelector((state) => state.user.password);
  const navigate = useNavigate();
  return (
    <div className="formSubscribe">
      <div className="formSubscribe_close">
        <Link
          to="/"
          className="formSubscribe_close-Button"
        >
          x
        </Link>
      </div>
      <form
        autoComplete="off"
        className="subscribeForm"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(submitSubscribe());
          navigate('/connexion', { replace: true });
        }}
      >
        <label
          className="subscribeForm_label"
        >
          Email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="subscribeForm_input"
          value={valueEmail}
          onChange={(event) => {
            dispatch(changeInputValue(event.target.value, 'email'));
          }}
        />
        <label
          className="subscribeForm_label"
        >
          Mot de passe :
        </label>
        <input
          type="password"
          name="password"
          value={valuePassword}
          placeholder="Mot de passe"
          className="subscribeForm_input"
          onChange={(event) => {
            dispatch(changeInputValue(event.target.value, 'password'));
          }}
        />
        <label
          htmlFor="selectRole"
          className="subscribeForm_label"
        >
          Rôle :
        </label>
        <select
          name="roles"
          id="selectRole"
          className="subscribeForm_select"
          onClick={(event) => {
            // console.log(event.target.value);
            dispatch(changeInputValue([event.target.value], 'roles'));
          }}
        >
          <option className="subscribeForm_select-item" value="">Choisir</option>
          <option className="subscribeForm_select-item" value="ROLE_RECRUITER">Recruteur</option>
          <option className="subscribeForm_select-item" value="ROLE_CANDIDATE">Candidat</option>
        </select>
        <button
          type="submit"
          className="subscribeForm_submit"
        >
          Inscription
        </button>
      </form>
      <Link
        to="/connexion"
        className="formSubscribe_linkConnexion"
      >
        Vous êtes déja inscrit ? cliquez ici
      </Link>
    </div>
  );
};
export default FormSubscribe;
