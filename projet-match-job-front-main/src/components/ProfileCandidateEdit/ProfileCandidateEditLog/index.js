/* eslint-disable jsx-a11y/label-has-associated-control */
import './profileCandidateEditLog.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeInputValue } from 'src/actions/user';
import ProfileCandidateNavEdit from '../ProfileCandidateNavEdit';

const ProfileCandidateEditLog = () => {
  const dispatch = useDispatch();
  const valueEmail = useSelector((state) => state.user.email);
  const valuePassword = useSelector((state) => state.user.password);
  const newPassword = useSelector((state) => state.user.newPassword);
  return (
    <div>
      <ProfileCandidateNavEdit />
      <form
        autoComplete="off"
        className="EditFormLog"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="EditFormLog-item">
          <label
            className="EditFormLog_label"
          >
            Votre nouvelle adresse mail :
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="EditFormLog_input"
            value={valueEmail}
            onChange={(event) => {
              dispatch(changeInputValue(event.target.value, 'email'));
            }}
          />
          <button
            type="submit"
            className="EditFormLog_submit"
          >
            Enregistrer
          </button>
        </div>
        <div className="EditFormLog-item">
          <label
            className="EditFormLog_label"
          >
            Nouveau mot de passe :
          </label>
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            className="EditFormLog_input"
            value={valuePassword}
            onChange={(event) => {
              dispatch(changeInputValue(event.target.value, 'password'));
            }}
          />
          <label
            className="EditFormLog_label"
          >
            Confirmez votre Mot de passe :
          </label>
          <input
            type="password"
            name="newPassword"
            placeholder="Mot de passe"
            className={(newPassword === valuePassword) ? 'EditFormLog_input' : 'EditFormLog_input-false'}
            value={newPassword}
            onChange={(event) => {
              dispatch(changeInputValue(event.target.value, 'newPassword'));
            }}
          />
          <button
            type="submit"
            className="EditFormLog_submit"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileCandidateEditLog;
