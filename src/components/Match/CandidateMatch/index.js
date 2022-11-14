/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { GitHub, BookOpen } from 'react-feather';
import Confetti from 'react-confetti';
import ProfileRecruiterNavEdit from '../../ProfileRecruiterEdit/ProfileRecruiterNavEdit';

import './candidateMatch.scss';
import { matchOn, saveIdToLike, sendLikeRecruiter } from '../../../actions/match';

const CandidateMatch = () => {
  const dispatch = useDispatch();

  const params = useParams();

  const { isMatch } = useSelector((state) => state.user);

  const { cards } = useSelector((state) => state.feed);

  const cardsFiltered = cards.filter((item) => (
    item.id == params.slug
  ));
  const techno = cardsFiltered[0].technologies;

  const { jobId } = useSelector((state) => state.job);
  console.log(cardsFiltered);

  if (isMatch) {
    return <Navigate to="/profil" replace />;
  }
  return (
    <>
      <ProfileRecruiterNavEdit />
      <p className="match_candidate-info"> {params.status === 'match' ? 'C\'est un MATCH !' : 'Ce candidat est intéressé par votre annonce!'}
      </p>
      <p className="match_candidate-info"> {params.status === 'match' ? 'Vous pouvez dès à présent prendre contact avec ce candidat.' : 'Il ne vous reste plus qu\'à cliquer sur Intéressé pour matcher, vous aurez alors accès à des informations de contact.'}
      </p>
      { (params.status === 'match') && (
        <Confetti
          recycle={false}
        />
      )}
      <div className="match_candidate" id="bottom">
        <h1 className="match_candidate-title">{cardsFiltered[0].jobtitle.title}</h1>
        <p className="match_candidate-Name"><span>{cardsFiltered[0].lastName}  {cardsFiltered[0].firstName} </span></p>
        <p className="match_candidate-Name"><span>Email : </span> {params.status === 'match' ? cardsFiltered[0].user.email : "Accessible s'il y a match"}</p>
        <p className="match_candidate-Name"><span>Téléphone : </span>{params.status === 'match' ? cardsFiltered[0].phoneNumber : "Accessible s'il y a match"} </p>
        <p className="match_candidate-location"><span>Localité :</span> {cardsFiltered[0].adress.city} </p>
        <p className="match_candidate-content"><span>Description :</span> <br />
          {cardsFiltered[0].description}
        </p>
        <ul className="match_candidate-list-filter">
          <li className="match_candidate-list-filter-item"><span>Expériences :</span> {cardsFiltered[0].experience.yearsNumber}</li>
          <li className="match_candidate-list-filter-item"><span>Contrat :</span> {cardsFiltered[0].contract.name}</li>
          <li className="match_candidate-list-filter-item"><span>Salaire : </span> {cardsFiltered[0].salary.name}</li>
        </ul>
        <div className="match_candidate-link">
          <div className="match_candidate-link-item">
            <a href={cardsFiltered[0].resume}> <GitHub /> </a>
            <a href={cardsFiltered[0].resume} className="match_candidate-link-item--github">GitHub</a>
          </div>
          <div className="match_candidate-link-item">
            <a href={cardsFiltered[0].portfolio}> <BookOpen /> </a>
            <a href={cardsFiltered[0].portfolio} className="match_candidate-link-item--portefolio">Portfolio</a>
          </div>
        </div>
        <p className="match_candidate-techno-title"><span>Skills Techno :</span></p>
        <ul className="match_candidate-list-techno">
          {techno.map((item) => (
            <li
              key={item.technologyName}
              style={{ backgroundColor: item.backgroundColor, color: item.textColor }}
              className="match_candidate-list-techno-item"
            >
              {item.technologyName}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={params.status === 'match' ? 'buttonMatch-hidden' : 'buttonMatch'}
          onClick={() => {
            dispatch(saveIdToLike(params.slug, jobId));
            dispatch(sendLikeRecruiter());
            dispatch(matchOn());
          }}
        >
          Intéressé
        </button>
      </div>
    </>
  );
};

export default CandidateMatch;
