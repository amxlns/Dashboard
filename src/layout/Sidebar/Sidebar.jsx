import { useState } from 'react';
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);

  return (
    <div className={ `sidebar` }>
      <div className="user-info">
          <div className="info-img img-fit-cover">
              <img src={ personsImgs.person_one } alt="profile image" />
          </div>
          <span className="info-name">USER</span>
      </div>

      <nav className="navigation">
          <ul className="nav-list">
            {
              navigationLinks.map((navigationLink) => (
                <li className="nav-item" key = { navigationLink.id }>
                  <a href="#" className={ `nav-link ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
                      <img src={ navigationLink.image } className="nav-link-icon" alt = { navigationLink.title } />
                      <span className="nav-link-text">{ navigationLink.title }</span>
                  </a>
                </li>
              ))
            }
          </ul>
      </nav>
    </div>
  )
}

export default Sidebar
