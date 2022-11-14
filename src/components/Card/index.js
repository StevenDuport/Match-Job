/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { loadCards } from '../../actions/feed';
import { saveIdToLike, sendLikeCandidate } from '../../actions/match';
import { loadProfileCandidate } from '../../actions/profileCandidate';

import './card.scss';

const Card = (
  {
    description,
    jobTitle,
    location,
    enterprise,
    experience,
    contract,
    salary,
    techno,
    jobId,
    swipe,
    match,
  },
) => {
  const dispatch = useDispatch();
  const candidateId = useSelector((state) => state.user.candidateId);

  return (
    <div className="card">
      <h1 className="card_title">{jobTitle}</h1>
      <h2 className="card_nameEnterprise"><span>Entreprise :</span> {enterprise}</h2>
      <p className="card_location"><span>Localité :</span> {location}</p>
      <p className="card_content"><span>Description :</span> <br /> {description}</p>
      <ul className="card_list-filter">
        <li className="card_list-filter-item"><span>Expériences requises :</span> {experience}</li>
        <li className="card_list-filter-item"><span>Contrat :</span> {contract}</li>
        <li className="card_list-filter-item"><span>Salaire :</span> {salary}</li>
      </ul>
      <p className="card_techno-title"><span>Skills Techno :</span></p>
      <ul className="card_list-techno">
        {techno.map((item) => (
          <li
            key={item.technologyName}
            className="card_list-techno-item"
            style={{ backgroundColor: item.backgroundColor, color: item.textColor }}
          >
            {item.technologyName}
          </li>
        ))}
      </ul>
      <div className="card_button">
        <button
          className="card_button-dislike"
          type="button"
          onClick={(event) => {
            // console.log(event);
            swipe('left');
            dispatch(loadCards());
            dispatch(loadProfileCandidate());
          }}
        >
          Suivant
        </button>
        <button
          className="card_button-like"
          type="button"
          onClick={() => {
            dispatch(saveIdToLike(candidateId, jobId));
            dispatch(sendLikeCandidate());
            swipe('right');
            dispatch(loadCards());
            dispatch(loadProfileCandidate());
          }}
        >
          Intéressé
        </button>
      </div>
    </div>
  );
};

Card.defaultProps = {
  description: '-',
  jobtitle: '-',
  location: '-',
  enterprise: '-',
  experience: '-',
  contract: '-',
  salary: '-',
  techno: [],
  jobId: '-',
};

export default Card;
