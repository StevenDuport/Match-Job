/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { saveIdToLike, sendLikeCandidate, matchOn } from 'src/actions/match';
import { loadCards } from 'src/actions/feed';
import { loadProfileCandidate } from 'src/actions/profileCandidate';
import Confetti from 'react-confetti';
import ProfileCandidateNavEdit from '../../ProfileCandidateEdit/ProfileCandidateNavEdit';
import './recruiterMatch.scss';

const RecruiterMatch = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { candidateId, isMatch } = useSelector((state) => state.user);

  console.log(candidateId);
  const { cards } = useSelector((state) => state.feed);

  const cardsFiltered = cards.filter((item) => (
    item.id == params.slug
  ));
  const techno = cardsFiltered[0].technologies;
  if (isMatch) {
    return <Navigate to="/fil" replace />;
  }
  return (
    <>
      <ProfileCandidateNavEdit />
      <p className="match_recruiter-info"> {params.status === 'match' ? 'C\'est un MATCH !' : 'Ce recruteur est intéressé par votre profil!'}</p>
      <p className="match_recruiter-info"> {params.status === 'match' ? 'Vous pouvez dès à présent prendre contact avec ce recruteur.' : 'Il ne vous reste plus qu\'à cliquer sur Intéressé pour matcher, vous aurez alors accès à des informations de contact'}</p>
      { (params.status === 'match') && (
        <Confetti
          recycle={false}
        />
      )}
      <div className="match_recruiter" id="bottom">
        <h1 className="match_recruiter-title">{cardsFiltered[0].jobtitle.title}</h1>
        <p className="match_recruiter-EntrepriseName"><span>Entreprise :</span> {cardsFiltered[0].recruiter.company.companyName}</p>
        <p className="match_recruiter-EntrepriseName match_recruiter-EntrepriseName--name "><span>{cardsFiltered[0].recruiter.lastname}  {cardsFiltered[0].recruiter.firstname}</span></p>
        <p className="match_recruiter-EntrepriseName"><span>Email : </span> {params.status === 'match' ? cardsFiltered[0].recruiter.user.email : "Accessible s'il y a match"}</p>
        <p className="match_recruiter-EntrepriseName"><span>Téléphone : </span>{params.status === 'match' ? cardsFiltered[0].recruiter.phoneNumber : "Accessible s'il y a match"}</p>
        <p className="match_recruiter-location"><span>Localité :</span> {cardsFiltered[0].recruiter.company.adress.city}</p>
        <p className="match_recruiter-content"><span>Description :</span> <br />
          {cardsFiltered[0].description}
        </p>
        <ul className="match_recruiter-list-filter">
          <li className="match_recruiter-list-filter-item"><span>Expériences requises :</span> {cardsFiltered[0].experience.yearsNumber}</li>
          <li className="match_recruiter-list-filter-item"><span>Contrat :</span> {cardsFiltered[0].contract.name}</li>
          <li className="match_recruiter-list-filter-item"><span>Salaire :</span>{cardsFiltered[0].salary.name} €</li>
        </ul>
        <p className="match_recruiter-techno-title"><span>Skills Techno :</span></p>
        <ul className="match_recruiter-list-techno">
          {techno.map((item) => (
            <li
              key={item.technologyName}
              style={{ backgroundColor: item.backgroundColor, color: item.textColor }} 
              className="match_recruiter-list-techno-item"
            >
              {item.technologyName}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={params.status === 'match' ? 'buttonMatch-hidden' : 'buttonMatch'}
          onClick={() => {
            dispatch(saveIdToLike(candidateId, cardsFiltered[0].id));
            dispatch(sendLikeCandidate());
            dispatch(loadCards());
            dispatch(loadProfileCandidate());
            dispatch(matchOn());
          }}
        >
          Intéressé
        </button>
      </div>
    </>
  );
};

export default RecruiterMatch;
