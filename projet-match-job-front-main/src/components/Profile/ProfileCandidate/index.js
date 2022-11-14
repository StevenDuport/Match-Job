/* eslint-disable react/jsx-no-target-blank */
import { GitHub, BookOpen, ArrowDownCircle } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import profilePicture from 'src/assets/img/profilePicture.png';
import { dateFormat } from '../../../utils/functions';
import { navigateOff } from '../../../actions/user';
import './profileCandidate.scss';

const ProfileCandidate = () => {
  const dispatch = useDispatch();
  const candidateData = useSelector((state) => state.profileCandidate.candidateData);
  const { candidateId } = useSelector((state) => state.user);
  const techno = candidateData.technologies;
  const email = useSelector((state) => state.user.email);

  /**
   *  function  associate id gender with a name
   */
  const funcGender = (dataGenre) => {
    let genre = '-';
    if (dataGenre === 1) {
      genre = 'Femme';
    }
    else if (dataGenre === 2) {
      genre = 'Homme';
    }
    return genre;
  };

  const gender = (Object.keys(candidateData).length === 0) ? '-' : funcGender(candidateData.genre);

  const date = (Object.keys(candidateData).length === 0) ? '-' : dateFormat(candidateData.birthday);

  // console.log(candidateData);
  return (
    <div className="profileContainer">
      { candidateId === '' ? (
        <div>
          <p className="profileInfo">Veuillez compléter votre profil pour accéder aux offres.</p>
        </div>
      ) : ''}
      <div className="profileContainer_button">
        <a href="#bottom" className="arrow"> <ArrowDownCircle size="2em" /> </a>
        <Link
          to="/profil/edit"
          className="profile_candidate-edit"
          onClick={() => (
            dispatch(navigateOff())
          )}
        >
          Edit
        </Link>
      </div>
      <div className="profile_candidate">
        <h1 className="profile_candidate-title">{(Object.keys(candidateData).length === 0) ? 'Intitulé du poste' : candidateData.jobtitle.title}</h1>
        <p className="profile_candidate-location"><span>Localité :</span> {(Object.keys(candidateData).length === 0) ? 'Ville' : candidateData.adress.city}</p>
        <p className="profile_candidate-content"><span>Description :</span> <br /> {(Object.keys(candidateData).length === 0) ? 'Votre description' : candidateData.description}
        </p>
        <ul className="profile_candidate-list-filter">
          <li className="profile_candidate-list-filter-item"><span>Expériences :</span> {(Object.keys(candidateData).length === 0) ? '- ans' : candidateData.experience.yearsNumber}</li>
          <li className="profile_candidate-list-filter-item"><span>Contrat :</span> {(Object.keys(candidateData).length === 0) ? 'Type de contrat' : candidateData.contract.name}</li>
          <li className="profile_candidate-list-filter-item"><span>Salaire :</span> {(Object.keys(candidateData).length === 0) ? 'Salaire recherché' : candidateData.salary.name}</li>
        </ul>
        <div className="profile_candidate-link">
          <div className="profile_candidate-link-item">
            <a href={(Object.keys(candidateData).length === 0) ? '#' : candidateData.resume} target="_blanK"> <GitHub /></a>
            <a
              href={(Object.keys(candidateData).length === 0) ? '#' : candidateData.resume}
              className="profile_candidate-link-item--github"
              target="_blanK"
            >Github
            </a>
          </div>
          <div className="profile_candidate-link-item">
            <a href={(Object.keys(candidateData).length === 0) ? '#' : candidateData.portfolio} target="_blanK"> <BookOpen /></a>
            <a
              href={(Object.keys(candidateData).length === 0) ? '#' : candidateData.portfolio}
              target="_blanK"
              className="profile_candidate-link-item--portefolio"
            > Portfolio
            </a>
          </div>
        </div>
        <p className="profile_candidate-techno-title"><span>Skills Techno :</span></p>
        <ul className="profile_candidate-list-techno">
          {(Object.keys(candidateData).length === 0) ? 'Skills techno' : techno.map((item) => (
            <li key={item.id} style={{ backgroundColor: item.backgroundColor, color: item.textColor }} className="profile_candidate-list-techno-item">{item.technologyName}</li>
          ))}
        </ul>
      </div>
      <div className="profile_candidateCharacter" id="bottom">
        <img className="profile_candidateCharacter-img" src={(Object.keys(candidateData).length === 0) ? profilePicture : candidateData.picture} alt="profil" />
        <section className="profile_candidateCharacter-section">
          {(Object.keys(candidateData).length === 0) ? 'Nom' : candidateData.lastName} {(Object.keys(candidateData).length === 0) ? '- Prenom' : candidateData.firstName}
        </section>
        <section className="profile_candidateCharacter-section">{(Object.keys(candidateData).length === 0) ? 'Date de naissance' : date}</section>
        <section className="profile_candidateCharacter-section">{(Object.keys(candidateData).length === 0) ? 'Genre' : gender}</section>
        <section className="profile_candidateCharacter-section">{(Object.keys(candidateData).length === 0) ? 'Numéro de téléphone' : candidateData.phoneNumber}</section>
        <section className="profile_candidateCharacter-section">
          <ul className="profile_candidateCharacter-section-list">
            <li className="profile_candidateCharacter-section-list-item">{(Object.keys(candidateData).length === 0) ? 'Adresse' : candidateData.adress.streetNumber} {(Object.keys(candidateData).length === 0) ? '-' : candidateData.adress.streetName}</li>
            <li className="profile_candidateCharacter-section-list-item">{(Object.keys(candidateData).length === 0) ? 'Ville' : candidateData.adress.city}</li>
            <li className="profile_candidateCharacter-section-list-item">{(Object.keys(candidateData).length === 0) ? 'Code postal' : candidateData.adress.zip}</li>
          </ul>
        </section>
        <section className="profile_candidateCharacter-section">{(Object.keys(candidateData).length === 0) ? 'email@monemail.fr' : email}</section>
      </div>
    </div>
  );
};
export default ProfileCandidate;
