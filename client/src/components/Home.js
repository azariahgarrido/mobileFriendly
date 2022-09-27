import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import React, {useState} from 'react';

 export default function Home() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    const handlePageChange = (page) => setCurrentPage(page);
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
          return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        return <Resume />;
      };

    return(
        <div>
            <div>
                <div><Header /></div>
                <div><Navigation currentPage={currentPage} handlePageChange={handlePageChange} /></div>
            </div>
            <div>
                {renderPage}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
};