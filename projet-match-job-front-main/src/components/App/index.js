// == Import

// dependency
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// Components
import Error from 'src/components/Error';
import Error403 from 'src/components/Error/Error403';
import Home from '../Home';
import Nav from '../Nav';
import ProfileCandidateEdit from '../ProfileCandidateEdit';
import ProfileRecruiterEdit from '../ProfileRecruiterEdit';
import ProfileCandidateEditLog from '../ProfileCandidateEdit/ProfileCandidateEditLog';
import LegalMention from '../LegalMention';
import About from '../About';
import FormConnexion from '../FormConnexion';
import FormSubscribe from '../FormSubscribe';
import BackgroundAnimate from '../BackgroundAnimate';
import Feed from '../Feed';
import InsertLogin from '../InsertLogin';
import Profile from '../Profile';
import JobEdit from '../JobEdit';
import CreateJob from '../CreateJob';
import RecruiterMatch from '../Match/RecruiterMatch';
import CandidateMatch from '../Match/CandidateMatch';

// Actions
import { loadSelect } from '../../actions/select';

// SCSS
import './styles.scss';
import { loadProfileRecruiter } from '../../actions/profileRecruiter';
import { loadProfileCandidate } from '../../actions/profileCandidate';

// == Composant
function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((store) => store.user.isLogged);
  const roles = useSelector((store) => store.user.roles);

  useEffect(() => {
    dispatch(loadSelect());
  }, []);

  useEffect(() => {
    dispatch(loadProfileRecruiter());
    dispatch(loadProfileCandidate());
  }, []);

  return (
    <div className="app">
      <BackgroundAnimate />
      <Routes>
        <Route path="/" element={<><Nav /><Home /> </>} />
        <Route
          path="/connexion"
          element={
            (
              <>
                <Nav />
                {!isLogged && <FormConnexion />}
                {isLogged && <InsertLogin />}
              </>
            )
          }
        />
        <Route path="/:status/recruteur/:slug" element={isLogged ? <RecruiterMatch /> : <Error403 />} />
        <Route path="/:status/candidat/:slug" element={isLogged ? <CandidateMatch /> : <Error403 />} />
        <Route path="/inscription" element={<><Nav /> <FormSubscribe /></>} />
        <Route path="/mentions-legales" element={<><Nav /> <LegalMention /></>} />
        <Route path="/a-propos" element={<><Nav /> <About /></>} />
        <Route path="/profil" element={isLogged ? <Profile /> : <Error403 />} />
        <Route path="/profile/edit/log" element={isLogged ? <ProfileCandidateEditLog /> : <Error403 />} />
        {(roles[0] === 'ROLE_CANDIDATE') && <Route path="/fil" element={isLogged ? <Feed /> : <Error403 />} /> }
        {(roles[0] === 'ROLE_CANDIDATE') && <Route path="/profil/edit" element={isLogged ? <ProfileCandidateEdit /> : <Error403 />} /> }
        <Route path="/job/edit/:slug" element={isLogged ? <JobEdit /> : <Error403 />} />
        <Route path="/job/creer" element={isLogged ? <CreateJob /> : <Error403 />} />
        {(roles[0] === 'ROLE_RECRUITER') && <Route path="/fil/job/:slug" element={isLogged ? <Feed /> : <Error403 />} /> }
        {(roles[0] === 'ROLE_RECRUITER') && <Route path="/profil/edit" element={isLogged ? <ProfileRecruiterEdit /> : <Error403 />} /> }
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
