import React, {useState} from 'react';
import Footer from '../Components/Footer';
import Navigation from '../Components/NavTabs';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects/>;
    }
    if (currentPage === 'Resume') {
      return <Resume/>;
    }
    return <Contact/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
      <main className='row h-100'>
        {/* We are passing the currentPage from state and the function to update it */}
        <Navigation currentPage={currentPage}
          handlePageChange={handlePageChange}/>
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
        <Footer />
      </main>
  );
}
