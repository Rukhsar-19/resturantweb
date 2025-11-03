import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/Commonstyles.css";
import 'remixicon/fonts/remixicon.css'
import Header from './Components/Header';
import Hero from './Components/Hero';
import Categories from './Components/Categories';
import Testimonials from './Components/Testimonials';
import Ourjourney from './Components/Ourjourney';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StandoutScreen from './Screens/StandoutScreen';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // optional: customize animation duration
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <StandoutScreen />
      <Testimonials />
      <Ourjourney />
      <Footer />
    </>
  );
}

export default App;
