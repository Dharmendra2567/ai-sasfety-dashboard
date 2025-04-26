import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import IncidentCards from '../components/IncidentCards';
import IncidentList from '../components/IncidentList';
export const HomePage = () => {
  const [incidentCounts, setIncidentCounts] = useState({
    total: 10,
    high: 3,
    medium: 5,
    low: 2
  });

  const updateCounts = (newSeverity: 'Low' | 'Medium' | 'High') => {
    setIncidentCounts(prev => ({
      total: prev.total + 1,
      high: newSeverity === 'High' ? prev.high + 1 : prev.high,
      medium: newSeverity === 'Medium' ? prev.medium + 1 : prev.medium,
      low: newSeverity === 'Low' ? prev.low + 1 : prev.low
    }));
  };

  return (
    <div className="app-container">
      {/* <Navbar/> */}
      <div className='content-wrapper'>
      <Sidebar/>
      <div className='main-content'>

      <IncidentCards 
        total={incidentCounts.total}
        high={incidentCounts.high}
        medium={incidentCounts.medium}
        low={incidentCounts.low}
      />
      <IncidentList onNewIncident={updateCounts} />
      </div>
      </div>
    </div>
  );
};