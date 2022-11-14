import { ArrowDownCircle } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { navigateOff } from 'src/actions/user';
import './profileRecruiter.scss';

const ProfileRecruiter = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.profileRecruiter.jobsRecruiterData);
  const dataRecruiter = useSelector((state) => state.profileRecruiter.recruiterData);
  const lastJob = jobs[jobs.length - 1];
  const techno = (Object.keys(jobs).length === 0) ? '-' : lastJob.technologies;
  let count = 1;
  return (
    <div className="profileRecruiterContainer">
      <div className="profileRecruiterContainer_button">
        <a href="#bottom" className="arrow"> <ArrowDownCircle size="2em" /> </a>
      </div>
      <div className="profile_recruiter" id="bottom">
        <p className="profile_recruiter-info">Dernière offre créée.</p>
        <h1 className="profile_recruiter-title">{(Object.keys(jobs).length === 0) ? 'Titre de l\'emploi' : lastJob.jobtitle.title}</h1>
        <p className="profile_recruiter-EntrepriseName"><span>Entreprise :</span> {(Object.keys(dataRecruiter).length === 0) ? 'Entreprise' : dataRecruiter.company.companyName}</p>
        <p className="profile_recruiter-location"><span>Localité :</span> {(Object.keys(dataRecruiter).length === 0) ? 'Ville' : dataRecruiter.company.adress.city}</p>
        <p className="profile_recruiter-content"><span>Description :</span> <br />
          {(Object.keys(jobs).length === 0) ? 'Description' : lastJob.description}
        </p>
        <ul className="profile_recruiter-list-filter">
          <li className="profile_recruiter-list-filter-item"><span>Expériences requises :</span> {(Object.keys(jobs).length === 0) ? '-' : lastJob.experience.yearsNumber}</li>
          <li className="profile_recruiter-list-filter-item"><span>Contrat :</span> {(Object.keys(jobs).length === 0) ? 'Type de Contrat' : lastJob.contract.name}</li>
          <li className="profile_recruiter-list-filter-item"><span>Salaire :</span>{(Object.keys(jobs).length === 0) ? 'Tranche de salaire proposé' : lastJob.salary.name}</li>
        </ul>
        <p className="profile_recruiter-techno-title"><span>Skills Techno :</span></p>
        <ul className="profile_recruiter-list-techno">
          {(Object.keys(jobs).length === 0) ? 'Skills techno' : techno.map((item) => (
            <li key={item.technologyName} style={{ backgroundColor: item.backgroundColor, color: item.textColor }} className="profile_recruiter-list-techno-item">{item.technologyName}</li>
          ))}
        </ul>
      </div>
      <div className="profile_recruiterCharacter">
        <Link
          to="/profil/edit"
          className="profile_recruiter-edit"
          onClick={() => (
            dispatch(navigateOff())
          )}
        >
          Modifier
        </Link>
        <section className="profile_recruiterCharacter-section profile_recruiterCharacter-section--jobs">
          <div className="add_flex">
            <div className="add_flex--title">
              Mes offres :
            </div>
            <Link
              to="/job/creer"
              className="profile_recruiterCharacter_add"
              onClick={() => (
                dispatch(navigateOff())
              )}
            >
              <span className="profile_recruiterCharacter_add--span">Créer une offre</span>+
            </Link>
          </div>
          <div className="jobsRecruiter_list">
            {(Object.keys(jobs).length === 0) ? '' : jobs.map((item) => (
              <Link
                to={`/fil/job/${item.id}`}
                className="jobsRecruiter_list-item "
                key={item.id}
              >
                {count++} - {item.jobtitle.title} - {item.contract.name}
              </Link>
            ))}
          </div>
        </section>
        <section className="profile_recruiterCharacter-section">{(Object.keys(dataRecruiter).length === 0) ? 'Entreprise' : dataRecruiter.company.companyName}</section>
        <section className="profile_recruiterCharacter-section">
          {(Object.keys(dataRecruiter).length === 0) ? 'Nom' : dataRecruiter.lastname}  {(Object.keys(dataRecruiter).length === 0) ? 'Prénom' : dataRecruiter.firstname}
        </section>
        <section className="profile_recruiterCharacter-section">{(Object.keys(dataRecruiter).length === 0) ? 'Numéro de téléphone' : dataRecruiter.phoneNumber}</section>
        <section className="profile_recruiterCharacter-section">
          <ul className="profile_recruiterCharacter-section-list">
            <li className="profile_recruiterCharacter-section-list-item">{(Object.keys(dataRecruiter).length === 0) ? 'Adresse' : dataRecruiter.company.adress.streetNumber} {(Object.keys(dataRecruiter).length === 0) ? '' : dataRecruiter.company.adress.streetName}</li>
            <li className="profile_recruiterCharacter-section-list-item">{(Object.keys(dataRecruiter).length === 0) ? 'Ville' : dataRecruiter.company.adress.city}</li>
            <li className="profile_recruiterCharacter-section-list-item">{(Object.keys(dataRecruiter).length === 0) ? 'Code postal' : dataRecruiter.company.adress.zip}</li>
          </ul>
        </section>
        <section className="profile_recruiterCharacter-section">{(Object.keys(dataRecruiter).length === 0) ? 'email@monemail.fr' : dataRecruiter.user.email}</section>
      </div>
    </div>
  );
};
export default ProfileRecruiter;
