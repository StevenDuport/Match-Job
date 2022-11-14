/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { changeInputValueJob, submitJobPost } from '../../../actions/job';
import './jobInput.scss';

const jobInput = () => {
  const dispatch = useDispatch();
  const {
    jobtitle,
    description,
    experience,
    contract,
    salary,
    techno1,
    techno2,
    techno3,
    techno4,
    techno5,
  } = useSelector((state) => state.job);
  // State Select
  const jobtitles = useSelector((state) => state.select.jobtitles);
  const experiences = useSelector((state) => state.select.experiences);
  const technologies = useSelector((state) => state.select.technologies);
  const contracts = useSelector((state) => state.select.contracts);
  const salaries = useSelector((state) => state.select.salaries);
  const { isSave } = useSelector((state) => state.user);

  if (isSave) {
    return <Navigate to="/profil" replace />;
  }

  return (
    <form
      className="jobContainerEdit"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(submitJobPost());
      }}
    >
      <div className="job">
        <label className="job_label">
          Intitulé du poste :
          <select
            required
            name="jobtitle"
            className="job_label-select"
            value={jobtitle}
            onChange={(event) => (
              dispatch(changeInputValueJob('jobtitle', event.target.value))
            )}
          >
            <option value="0">Poste</option>
            {jobtitles.map((item) => (
              <option key={item.id} value={item.id}>{item.title}</option>
            ))}
          </select>
        </label>
        <label className="job_label">
          Description :
          <textarea
            className="job_label-input--description"
            type="textarea"
            placeholder="Saisissez une courte description"
            maxLength="300"
            name="description"
            value={description}
            onChange={(event) => (
              dispatch(changeInputValueJob('description', event.target.value))
            )}
          >
            {description}
          </textarea>
        </label>
        <label className="job_label">
          Expérience :
          <select
            className="job_label-select"
            name="experience"
            value={experience}
            onChange={(event) => (
              dispatch(changeInputValueJob('experience', event.target.value))
            )}
          >
            <option value="0">an(s)</option>
            {experiences.map((item) => (
              <option key={item.id} value={item.id}>{item.yearsNumber}</option>
            ))}
          </select>
        </label>
        <label className="job_label">
          Contrat recherché :
          <select
            className="job_label-select"
            name="contract"
            value={contract}
            onChange={(event) => (
              dispatch(changeInputValueJob('contract', event.target.value))
            )}
          >
            <option value="0">-</option>
            {contracts.map((item) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>
        </label>
        <label className="job_label">
          Salaire recherché :
          <select
            className="job_label-select"
            name="salary"
            value={salary}
            onChange={(event) => (
              dispatch(changeInputValueJob('salary', event.target.value))
            )}
          >
            <option value="0">- €</option>
            {salaries.map((item) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>
        </label>
        <label className="job_techno">
          Selectionner les technos requisent:
          <div className="job_techno-selectContainer">
            <select
              className="job_techno-select"
              name="techno1"
              value={techno1}
              onChange={(event) => (
                dispatch(changeInputValueJob('techno1', event.target.value))
              )}
            >
              <option value="0">Techno</option>
              {technologies.map((item) => (
                <option key={item.id} value={item.id}>{item.technologyName}</option>
              ))}
            </select>
            <select
              className="job_techno-select"
              name="techno2"
              value={techno2}
              onChange={(event) => (
                dispatch(changeInputValueJob('techno2', event.target.value))
              )}
            >
              <option value="0">Techno</option>
              {technologies.map((item) => (
                <option key={item.id} value={item.id}>{item.technologyName}</option>
              ))}
            </select>
            <select
              className="job_techno-select"
              name="techno3"
              value={techno3}
              onChange={(event) => (
                dispatch(changeInputValueJob('techno3', event.target.value))
              )}
            >
              <option value="0">Techno</option>
              {technologies.map((item) => (
                <option key={item.id} value={item.id}>{item.technologyName}</option>
              ))}
            </select>
            <select
              className="job_techno-select"
              name="techno4"
              value={techno4}
              onChange={(event) => (
                dispatch(changeInputValueJob('techno4', event.target.value))
              )}
            >
              <option value="0">Techno</option>
              {technologies.map((item) => (
                <option key={item.id} value={item.id}>{item.technologyName}</option>
              ))}
            </select>
            <select
              className="job_techno-select"
              name="techno5"
              value={techno5}
              onChange={(event) => (
                dispatch(changeInputValueJob('techno5', event.target.value))
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
      <button
        type="submit"
        className="job_submit"
      >
        Créer l'offre
      </button>
    </form>
  );
};
export default jobInput;
