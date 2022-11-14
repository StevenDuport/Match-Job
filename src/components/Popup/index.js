import { X } from 'react-feather';
import { useDispatch } from 'react-redux';
import Like from 'src/assets/img/like.gif';
import Dislike from 'src/assets/img/dislike.gif';
import { isPopup } from '../../actions/user';
import './popup.scss';

const Popup = () => {
  const dispatch = useDispatch();
  return (
    <div className="popup">
      <div className="popup_container">
        <button
          type="button"
          className="popup_button"
          onClick={() => (
            dispatch(isPopup())
          )}
        >
          <X color='white'/>
        </button>
        <div className="popup_gifs">
          <img className="popup_gif-img" src={Like} alt="explication like gif" />
          <img className="popup_gif-img" src={Dislike} alt="explication dislike gif" />
        </div>
        <p className="popup_infos">
          Toutes les cartes sont interactives.
        </p>
        <p className="popup_infos">Amusez-vous ! </p>
      </div>
    </div>
  );
};
export default Popup;
