import React from "react";
// import "./IncidentCards.css";

interface IncidentCardsProps {
  total: number;
  high: number;
  medium: number;
  low: number;
}

const IncidentCards: React.FC<IncidentCardsProps> = ({ total, high, medium, low }) => {
  const cardData = [
    { type: "Total Incidents", count: total, severity: "total" },
    { type: "Critical Incidents", count: high, severity: "high" },
    { type: "Medium Severity", count: medium, severity: "medium" },
    { type: "Low Severity", count: low, severity: "low" },
  ];

  return (
    <div className="incident-cards-container">
      {cardData.map((item, index) => (
        <div key={index} className={`incident-card ${item.severity}`}>
          <div className="card-content">
            <h3 className="card-title">{item.type}</h3>
            <p className="card-count">{item.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncidentCards;