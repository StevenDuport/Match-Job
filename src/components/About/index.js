import './about.scss';
import meetingPhoto from 'src/assets/img/meeting-unsplash.jpg';

const APropos = () => (
  <div className="about">
    <div className="about_content">
      <h1 className="about_title">À propos de Match-Job</h1>
      <p className="about_text">
        Match-Job a pour ambition d'aider les acteurs du monde du travail,
        pour que candidat comme recruteur, puissent décrocher le poste ou
        leur nouveau collaborateur idéal.
      </p>
      <p className="about_text">
        Nous mettons un point d'honneur à faciliter et fluidifier
        vos recherches grâce à notre système de "Match",
        pour que le premier contact soit le plus naturel possible.
      </p>
    </div>
    <div className="about_section">
      <img src={meetingPhoto} className="about_img" alt="meetingPhoto" />
    </div>
  </div>
);

export default APropos;
