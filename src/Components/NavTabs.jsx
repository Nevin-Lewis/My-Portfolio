import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({currentPage, handlePageChange}) {
  return (
    <div className='row myheader'>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ?
           'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
  );
};
// NavTabs.propTypes = {
//   currentPage: propTypes.string.isRequired,
//   handlePageChange: propTypes.string.isRequired,
// };

export default NavTabs;
