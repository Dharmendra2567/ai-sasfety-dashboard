import React from 'react';
import './styles/Sidebar.css'
import './index.css';
import './styles/incidentCard.css'
import './styles/incidentList.css'
import './styles/footer.css'
import './styles/home.css'
import logo from './logo.svg';
import { HomePage } from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div>
      <div style={{marginBottom:'0px'}}>
      <Navbar/>
      </div>
    <HomePage/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
