import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Stats from './components/Stats/Stats';
import MainSection from './components/MainSection/MainSection';
import StepsSection from './components/StepsSection/StepsSection';
import PricingSection from './components/PricingSection/PricingSection';
import Footer from './components/Footer/Footer';
import Ready from './components/Ready/Ready';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main>
          <Banner />
          <Stats />
          <MainSection />
          <StepsSection />
          <PricingSection />
        </main>
        <Ready />
        <Footer />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      />
    </CartProvider>
  );
}

export default App;
