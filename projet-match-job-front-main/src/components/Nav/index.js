/* eslint-disable jsx-a11y/label-has-associated-control */
import { NavLink } from 'react-router-dom';
import match from 'src/assets/img/matchJob1.svg';
import 'src/components/Nav/nav.scss';

const Nav = () => (
  <div className="nav">
    <div className="nav_header">
      <img className="nav_header-img" src={match} alt="logo" />
      <h1 className="nav_header-title">MATCH-JOB</h1>
    </div>
    <label htmlFor="toggle" className="label">☰</label>
    <input type="checkbox" id="toggle" />
    <div className="nav_link">
      <NavLink
        to="/"
        className={({ isActive }) => (
          isActive ? 'nav_link-item--active' : 'nav_link-item'
        )}
      >
        Home
      </NavLink>
      <NavLink
        to="/mentions-legales"
        className={({ isActive }) => (
          isActive ? 'nav_link-item--active' : 'nav_link-item'
        )}
      >
        Mentions légales
      </NavLink>
      <NavLink
        to="/a-propos"
        className={({ isActive }) => (
          isActive ? 'nav_link-item--active' : 'nav_link-item'
        )}
      >
        A propos
      </NavLink>
    </div>
  </div>
);

export default Nav;

