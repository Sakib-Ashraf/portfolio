import React from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Blogs from '../components/Blogs/Blogs';
import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';
import Portfolios from '../components/Portfolios/Portfolios';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolios />
      <Testimonials />
      <Blogs />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
