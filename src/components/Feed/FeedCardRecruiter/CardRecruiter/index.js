import { GitHub, BookOpen } from 'react-feather';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveIdToLike, sendLikeRecruiter } from '../../../../actions/match';
import { loadJobsRecruiter, loadProfileRecruiter } from '../../../../actions/profileRecruiter';
import './cardRecruiter.scss';

const CardRecruiter = ({
  jobtitle,
  lastName,
  firstName,
  adress,
  description,
  experience,
  contract,
  salary,
  resume,
  portfolio,
  technologies,
  id,
  swipe,
  matchups
}) => {
  const dispatch = useDispatch();
  const params = useParams();

  const currentCandidateLiked = matchups.filter((item) => (
    params.slug == item.job.id && item.recruiterStatus === true
  ));

  console.log(currentCandidateLiked);

  const liked = (likedJob) => {
    let isLiked;
    if ((likedJob.length === 0)) {
      isLiked = false;
    }
    else if (likedJob.matchStatus === false) {
      isLiked = true;
    }
    return isLiked;
  };

  return (
    <div className="cardRecruiteur">
      <h1 className="cardRecruiteur_title">{jobtitle.title}</h1>
      <p className="cardRecruiteur_name"> {lastName} {firstName} </p>
      <p className="cardRecruiteur_location"><span>Localité :</span> {adress.city}</p>
      <p className="cardRecruiteur_content"><span>Description :</span> <br /> {description}</p>
      <ul className="cardRecruiteur_list-filter">
        <li className="cardRecruiteur_list-filter-item"><span>Expériences :</span> {experience.yearsNumber} ans</li>
        <li className="cardRecruiteur_list-filter-item"><span>Contrat :</span> {contract.name}</li>
        <li className="cardRecruiteur_list-filter-item"><span>Salaire :</span> {salary.name}</li>
      </ul>
      <div className="cardRecruiter-link">
        <div className="cardRecruiter-link-item">
          <a href={resume} rel="noreferrer" target="_blank"> <GitHub /> </a>
          <a href={resume} rel="noreferrer" target="_blank" className="cardRecruiter-link-item--github">Mon Github</a>
        </div>
        <div className="cardRecruiter-link-item">
          <a href={portfolio} rel="noreferrer" target="_blank"> <BookOpen /> </a>
          <a href={portfolio} rel="noreferrer" target="_blank" className="cardRecruiter-link-item--portfolio">Mon Portfolio</a>
        </div>
      </div>
      <p className="cardRecruiteur_techno-title"><span>Skills Techno :</span></p>
      <ul className="cardRecruiteur_list-techno">
        {technologies.map((item) => (
          <li
            key={item.technologyName}
            className="cardRecruiteur_list-techno-item"
            style={{ backgroundColor: item.backgroundColor, color: item.textColor }}
          >
            {item.technologyName}
          </li>
        ))}
      </ul>
      <div className="cardRecruiteur_button">
        <button
          className="cardRecruiteur_button-dislike"
          type="button"
          onClick={() => {
            swipe('left');
            dispatch(loadProfileRecruiter());
            dispatch(loadJobsRecruiter());
          }}
        >
          Suivant
        </button>
        { liked(currentCandidateLiked) ? <p className="cardRecruiter_liked">Déjà Intéressé</p> : (
          <button
            className="cardRecruiteur_button-like "
            type="button"
            onClick={() => {
              dispatch(saveIdToLike(id, params.slug));
              dispatch(sendLikeRecruiter());
              swipe('right');
              dispatch(loadProfileRecruiter());
              dispatch(loadJobsRecruiter());
            }}
          >
            Intéressé
          </button>
        )}
      </div>
    </div>
  );
};

export default CardRecruiter;
