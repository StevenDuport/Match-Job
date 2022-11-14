/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { saveDataRecruiter, submitProfileRecruiterPost, submitProfileRecruiterPut } from '../../../actions/profileRecruiter';
import './profileRecruiterInput.scss';

const ProfileRecruiterInput = () => {
  const dispatch = useDispatch();
  const {
    companyName,
    lastname,
    firstname,
    picture,
    phoneNumber,
    streetNumber,
    streetName,
    zip,
    city,
  } = useSelector((state) => state.profileRecruiter);
  const { recruiterId } = useSelector((state) => state.user);

  const formSubmit = recruiterId === '' ? submitProfileRecruiterPost() : submitProfileRecruiterPut();
  const { isSave } = useSelector((state) => state.user);

  if (isSave) {
    return <Navigate to="/profil" replace />;
  }

  return (
    <form
      className="profileRecruiterContainerEdit"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(formSubmit);
      }}
    >
      <div className="row">
        <div className="profileRecruiterCharacter" id="bottom">
          <label className="profileRecruiterCharacter_label">
            Entreprise :
            <input
              required
              className="profileRecruiterCharacter_label-input"
              type="text"
              placeholder="Mon entreprise"
              name="companyName"
              value={companyName}
              onChange={(event) => (
                dispatch(saveDataRecruiter('companyName', event.target.value))
              )}
            />
          </label>
          <label className="profileRecruiterCharacter_label">
            Nom :
            <input
              required
              className="profileRecruiterCharacter_label-input"
              type="text"
              placeholder="Mon nom"
              name="lastname"
              value={lastname}
              onChange={(event) => (
                dispatch(saveDataRecruiter('lastname', event.target.value))
              )}
            />
          </label>
          <label className="profileRecruiterCharacter_label">
            Prénom :
            <input
              required
              className="profileRecruiterCharacter_label-input"
              type="text"
              placeholder="Mon prénom"
              name="firstname"
              value={firstname}
              onChange={(event) => (
                dispatch(saveDataRecruiter('firstname', event.target.value))
              )}
            />
          </label>
          <label className="profileRecruiterCharacter_label">
            Téléphone :
            <input
              className="profileRecruiterCharacter_label-input"
              type="tel"
              minlenght="10"
              maxLength="10"
              placeholder="0152483972"
              name="phone_number"
              value={phoneNumber}
              onChange={(event) => (
                dispatch(saveDataRecruiter('phoneNumber', event.target.value))
              )}
            />
          </label>
          <label className="profileRecruiterCharacter_label">
            Adresse :
            <input
              required
              className="profileRecruiterCharacter_label-input"
              type="text"
              placeholder="rue de l'avenir"
              name="streetName"
              value={streetName}
              onChange={(event) => (
                dispatch(saveDataRecruiter('streetName', event.target.value))
              )}
            />
          </label>
          <label className="profileRecruiterCharacter_label">
            N° Rue :
            <input
              required
              className="profileRecruiterCharacter_label-input"
              type="number"
              placeholder="8"
              name="streetNumber"
              value={streetNumber}
              onChange={(event) => (
                dispatch(saveDataRecruiter('streetNumber', event.target.value))
              )}
            />
          </label>
          <label className="profileRecruiterCharacter_label">
            Ville :
            <input
              required
              className="profileRecruiterCharacter_label-input"
              type="text"
              placeholder="Paris"
              name="city"
              value={city}
              onChange={(event) => (
                dispatch(saveDataRecruiter('city', event.target.value))
              )}
            />
          </label>
          <label className="profileRecruiterCharacter_label">
            CP :
            <input
              required
              className="profileRecruiterCharacter_label-input"
              type="number"
              placeholder="75000"
              name="zip"
              value={zip}
              onChange={(event) => (
                dispatch(saveDataRecruiter('zip', event.target.value))
              )}
            />
          </label>
          <Link
            to="/profile/edit/log"
            className="profileRecruiter_editLog"
          >
            Modifier Email et Mot De Passe ici
          </Link>
        </div>
      </div>
      <button
        type="submit"
        className="profileRecruiter_submit"
      >
        Confirmer les modifications
      </button>
    </form>
  );
};
export default ProfileRecruiterInput;
