/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef } from 'react';
import { ArrowDownCircle } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import {
  changeInputValueCandidate,
  changeAdressCandidate,
  changeTechnoCandidate,
  changeSelectCandidate,
  submitProfilePost,
  submitProfilePut,
  submitPicture,
}
  from '../../../actions/profileCandidate';
import './profileCandidateInput.scss';

const ProfileCandidateInput = () => {
  const dispatch = useDispatch();

  // State profileCandidate
  const { isSave } = useSelector((state) => state.user);
  const lastname = useSelector((state) => state.profileCandidate.lastname);
  const firstname = useSelector((state) => state.profileCandidate.firstname);
  const picture = useSelector((state) => state.profileCandidate.picture);
  const genre = useSelector((state) => state.profileCandidate.genre);
  const birthday = useSelector((state) => state.profileCandidate.birthday);
  const phoneNumber = useSelector((state) => state.profileCandidate.phone_number);
  const streetNumber = useSelector((state) => state.profileCandidate.adress.streetNumber);
  const streetName = useSelector((state) => state.profileCandidate.adress.streetName);
  const zip = useSelector((state) => state.profileCandidate.adress.zip);
  const city = useSelector((state) => state.profileCandidate.adress.city);
  const description = useSelector((state) => state.profileCandidate.description);
  const experienceId = useSelector((state) => state.profileCandidate.experience_id);
  const contractId = useSelector((state) => state.profileCandidate.contract_id);
  const salaryId = useSelector((state) => state.profileCandidate.salary_id);
  const github = useSelector((state) => state.profileCandidate.github);
  const portfolio = useSelector((state) => state.profileCandidate.portfolio);
  const techno1 = useSelector((state) => state.profileCandidate.techno1);
  const techno2 = useSelector((state) => state.profileCandidate.techno2);
  const techno3 = useSelector((state) => state.profileCandidate.techno3);
  const techno4 = useSelector((state) => state.profileCandidate.techno4);
  const techno5 = useSelector((state) => state.profileCandidate.techno5);
  const jobtitle = useSelector((state) => state.profileCandidate.jobtitle);

  // State Select
  const jobtitles = useSelector((state) => state.select.jobtitles);
  const experiences = useSelector((state) => state.select.experiences);
  const technologies = useSelector((state) => state.select.technologies);
  const contracts = useSelector((state) => state.select.contracts);
  const salaries = useSelector((state) => state.select.salaries);

  const candidateId = useSelector((state) => state.user.candidateId);

  const submit = (candidateId === '') ? submitProfilePost() : submitProfilePut();

  if (isSave) {
    return <Navigate to="/profil" replace />;
  }

  console.log(submit);

  return (
    <form
      className="profileContainerEdit"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(submit);
      }}
    >
      <div className="row">
        <div className="profileContainerEdit_button">
          <a href="#bottom" className="arrow"> <ArrowDownCircle size="2em" /> </a>
        </div>
        <div className="profileCandidate">
          <label className="profileCandidate_label">
            Intitulé du poste :
            <select
              required
              name="jobtitle"
              className="profileCandidate_label-select"
              value={jobtitle}
              onChange={(event) => (
                dispatch(changeSelectCandidate('jobtitle', event.target.value))
              )}
            >
              <option value="0">Poste</option>
              {jobtitles.map((item) => (
                <option key={item.id} value={item.id}>{item.title}</option>
              ))}
            </select>
          </label>
          <label className="profileCandidate_label">
            Description :
            <textarea
              className="profileCandidate_label-input--description"
              type="textarea"
              placeholder="Saisissez une courte description"
              maxLength="300"
              name="description"
              value={description}
              onChange={(event) => (
                dispatch(changeInputValueCandidate('description', event.target.value))
              )}
            >
              {description}
            </textarea>
          </label>
          <label className="profileCandidate_label">
            Expérience :
            <select
              className="profileCandidate_label-select"
              name="experience_id"
              value={experienceId}
              onChange={(event) => {
                dispatch(changeSelectCandidate('experience_id', event.target.value));
              }}
            >
              <option value="0">an(s)</option>
              {experiences.map((item) => (
                <option key={item.id} value={item.id}>{item.yearsNumber}</option>
              ))}
            </select>
          </label>
          <label className="profileCandidate_label">
            Contrat recherché :
            <select
              className="profileCandidate_label-select"
              name="contract_id"
              value={contractId}
              onChange={(event) => (
                dispatch(changeSelectCandidate('contract_id', event.target.value))
              )}
            >
              <option value="0">-</option>
              {contracts.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
          </label>
          <label className="profileCandidate_label">
            Salaire recherché :
            <select
              className="profileCandidate_label-select"
              name="salary_id"
              value={salaryId}
              onChange={(event) => (
                dispatch(changeSelectCandidate('salary_id', event.target.value))
              )}
            >
              <option value="0">- k€</option>
              {salaries.map((item) => (
                <option key={item.id} value={item.id}>{item.name} k€</option>
              ))}
            </select>
          </label>
          <label className="profileCandidate_label">
            Lien Github :
            <input
              className="profileCandidate_label-input"
              type="url"
              placeholder="https://Github/monGitHub.io"
              name="github"
              value={github}
              onChange={(event) => (
                dispatch(changeInputValueCandidate('github', event.target.value))
              )}
            />
          </label>
          <label className="profileCandidate_label">
            Lien Portfolio :
            <input
              className="profileCandidate_label-input"
              type="url"
              placeholder="https://monPortfolio.com"
              name="portfolio"
              value={portfolio}
              onChange={(event) => (
                dispatch(changeInputValueCandidate('portfolio', event.target.value))
              )}
            />
          </label>
          <label className="profileCandidate_techno">
            Selectionner vos Skils Techno :
            <div className="profileCandidate_techno-selectContainer">
              <select
                className="profileCandidate_techno-select"
                name="techno1"
                value={techno1}
                onChange={(event) => (
                  dispatch(changeTechnoCandidate('techno1', event.target.value))
                )}
              >
                <option value="0">Techno</option>
                {technologies.map((item) => (
                  <option key={item.id} value={item.id}>{item.technologyName}</option>
                ))}
              </select>
              <select
                className="profileCandidate_techno-select"
                name="techno2"
                value={techno2}
                onChange={(event) => (
                  dispatch(changeTechnoCandidate('techno2', event.target.value))
                )}
              >
                <option value="0">Techno</option>
                {technologies.map((item) => (
                  <option key={item.id} value={item.id}>{item.technologyName}</option>
                ))}
              </select>
              <select
                className="profileCandidate_techno-select"
                name="techno3"
                value={techno3}
                onChange={(event) => (
                  dispatch(changeTechnoCandidate('techno3', event.target.value))
                )}
              >
                <option value="0">Techno</option>
                {technologies.map((item) => (
                  <option key={item.id} value={item.id}>{item.technologyName}</option>
                ))}
              </select>
              <select
                className="profileCandidate_techno-select"
                name="techno4"
                value={techno4}
                onChange={(event) => (
                  dispatch(changeTechnoCandidate('techno4', event.target.value))
                )}
              >
                <option value="0">Techno</option>
                {technologies.map((item) => (
                  <option key={item.id} value={item.id}>{item.technologyName}</option>
                ))}
              </select>
              <select
                className="profileCandidate_techno-select"
                name="techno5"
                value={techno5}
                onChange={(event) => (
                  dispatch(changeTechnoCandidate('techno5', event.target.value))
                )}
              >
                <option value="0">Techno</option>
                {technologies.map((item) => (
                  <option key={item.id} value={item.id}>{item.technologyName}</option>
                ))}
              </select>
            </div>
          </label>
        </div>
        <div className="profileCandidateCharacter" id="bottom">
          <label className="profileCandidateCharacter_label">
            Url de votre photo de profil :
            <input type="hidden" name="MAX_FILE_SIZE" value="4194304" />
            <input
              className="profileCandidate_label-input"
              type="url"
              name="picture"
              value={picture}
              onChange={(event) => {
                dispatch(changeInputValueCandidate('picture', event.target.value));
              }}
            />
          </label>
          <label className="profileCandidateCharacter_label">
            Nom :
            <input
              required
              className="profileCandidateCharacter_label-input"
              type="text"
              placeholder="Mon nom"
              name="lastname"
              value={lastname}
              onChange={(event) => (
                dispatch(changeInputValueCandidate('lastname', event.target.value))
              )}
            />
          </label>
          <label className="profileCandidateCharacter_label">
            Prénom :
            <input
              required
              className="profileCandidateCharacter_label-input"
              type="text"
              placeholder="Mon prénom"
              name="firstname"
              value={firstname}
              onChange={(event) => (
                dispatch(changeInputValueCandidate('firstname', event.target.value))
              )}
            />
          </label>
          <label className="profileCandidateCharacter_label">
            Date de naissance :
            <input
              required
              className="profileCandidateCharacter_label-input"
              type="date"
              name="birthday"
              value={birthday}
              onChange={(event) => (
                dispatch(changeInputValueCandidate('birthday', event.target.value))
              )}
            />
          </label>
          <label className="profileCandidateCharacter_label">
            Genre :
            <select
              required
              className="profileCandidateCharacter_label-select"
              name="genre"
              value={genre}
              onChange={(event) => (
                dispatch(changeSelectCandidate('genre', event.target.value))
              )}
            >
              <option value="0">Genre</option>
              <option value="1">Femme</option>
              <option value="2">Homme</option>
            </select>
          </label>
          <label className="profileCandidateCharacter_label">
            Téléphone :
            <input
              className="profileCandidateCharacter_label-input"
              type="tel"
              minlenght="10"
              maxLength="10"
              placeholder="0152483972"
              name="phone_number"
              value={phoneNumber}
              onChange={(event) => (
                dispatch(changeInputValueCandidate('phone_number', event.target.value))
              )}
            />
          </label>
          <label className="profileCandidateCharacter_label">
            Adresse :
            <input
              required
              className="profileCandidateCharacter_label-input"
              type="text"
              placeholder="rue de l'avenir"
              name="streetName"
              value={streetName}
              onChange={(event) => (
                dispatch(changeAdressCandidate('streetName', event.target.value))
              )}
            />
          </label>
          <label className="profileCandidateCharacter_label">
            N° Rue :
            <input
              required
              className="profileCandidateCharacter_label-input"
              type="number"
              placeholder="8"
              name="streetNumber"
              value={streetNumber}
              onChange={(event) => (
                dispatch(changeAdressCandidate('streetNumber', event.target.value))
              )}
            />
          </label>
          <label className="profileCandidateCharacter_label">
            Ville :
            <input
              required
              className="profileCandidateCharacter_label-input"
              type="text"
              placeholder="Paris"
              name="city"
              value={city}
              onChange={(event) => (
                dispatch(changeAdressCandidate('city', event.target.value))
              )}
            />
          </label>
          <label className="profileCandidateCharacter_label">
            CP :
            <input
              required
              className="profileCandidateCharacter_label-input"
              type="number"
              placeholder="75000"
              name="zip"
              value={zip}
              onChange={(event) => (
                dispatch(changeAdressCandidate('zip', event.target.value))
              )}
            />
          </label>
          <Link
            to="/profile/edit/log"
            className="profileCandidate_editLog"
          >
            Modifier Email et Mot De Passe ici
          </Link>
        </div>
      </div>
      <button
        type="submit"
        className="profileCandidate_submit"
      >
        Confirmer les modifications
      </button>
    </form>
  );
};
export default ProfileCandidateInput;
