import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { 
  ChevronDown, 
  ChevronUp, 
  ExclamationCircle,
  Clock,
  Plus
} from "react-bootstrap-icons";

type Incident = {
  id: number;
  title: string;
  description: string;
  severity: "Low" | "Medium" | "High";
  reported_at: string;
};

interface IncidentListProps {
  onNewIncident: (severity: 'Low' | 'Medium' | 'High') => void;
}

const IncidentList: React.FC<IncidentListProps> = ({ onNewIncident }) => {
  // Mock data
  const initialIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Hiring Algorithm",
    description: "AI recruitment tool consistently downgraded applications from women for technical roles, reinforcing gender stereotypes in tech hiring practices across multiple Fortune 500 companies.",
    severity: "High",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "Medical Diagnosis Hallucination",
    description: "Clinical decision support system generated false cancer diagnoses for 12 patients, causing unnecessary distress and medical testing before errors were identified.",
    severity: "High",
    reported_at: "2025-03-18T14:20:00Z"
  },
  {
    id: 3,
    title: "Autonomous Vehicle Sensor Failure",
    description: "Self-driving car system failed to recognize pedestrians wearing unconventional clothing patterns during night operations, requiring emergency manual override.",
    severity: "Medium",
    reported_at: "2025-03-22T08:45:00Z"
  },
  {
    id: 4,
    title: "Chatbot Data Leak",
    description: "Customer service chatbot inadvertently revealed partial credit card numbers during 143 conversations due to improper input sanitization.",
    severity: "Medium",
    reported_at: "2025-03-25T11:30:00Z"
  },
  {
    id: 5,
    title: "Facial Recognition Bias",
    description: "Airport security system showed 34% higher false positive rates for certain ethnic groups, causing unnecessary secondary screenings.",
    severity: "Medium",
    reported_at: "2025-04-01T16:15:00Z"
  },
  {
    id: 6,
    title: "Recommendation Algorithm Glitch",
    description: "E-commerce platform displayed inappropriate products to minors due to faulty age verification in its recommendation engine.",
    severity: "Medium",
    reported_at: "2025-04-05T09:50:00Z"
  },
  {
    id: 7,
    title: "Voice Assistant Privacy Breach",
    description: "Smart home devices recorded and stored private conversations without consent due to faulty wake-word detection algorithms.",
    severity: "Low",
    reported_at: "2025-04-10T13:25:00Z"
  },
  {
    id: 8,
    title: "Content Moderation Overblocking",
    description: "Social media AI incorrectly flagged 12,000 legitimate posts about medical conditions as harmful content, limiting health discussions.",
    severity: "Low",
    reported_at: "2025-04-15T10:10:00Z"
  },
  {
    id: 9,
    title: "Predictive Policing Bias",
    description: "Law enforcement algorithm disproportionately targeted minority neighborhoods due to historical data biases in crime reporting patterns.",
    severity: "High",
    reported_at: "2025-04-18T15:45:00Z"
  },
  {
    id: 10,
    title: "Language Translation Error",
    description: "Diplomatic translation system altered the tone of sensitive negotiations, converting neutral statements into confrontational language in 7 key meetings.",
    severity: "Medium",
    reported_at: "2025-04-20T11:20:00Z"
  }
];
    // Add 7 more mock incidents...
  

  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [filter, setFilter] = useState<"All" | "Low" | "Medium" | "High">("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [newIncident, setNewIncident] = useState<{
    title: string;
    description: string;
    severity: "Low" | "Medium" | "High"; // Fixed here
  }>({
    title: "",
    description: "",
    severity: "Medium" // Default value
  });

  // Filter and sort incidents
  const filteredIncidents = incidents
    .filter(incident => filter === "All" || incident.severity === filter)
    .sort((a, b) => {
      const dateA = new Date(a.reported_at);
      const dateB = new Date(b.reported_at);
      return sortOrder === "newest" 
        ? dateB.getTime() - dateA.getTime() 
        : dateA.getTime() - dateB.getTime();
    });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIncident.title || !newIncident.description) return;

    const incident: Incident = {
      id: incidents.length + 1,
      title: newIncident.title,
      description: newIncident.description,
      severity: newIncident.severity,
      reported_at: new Date().toISOString()
    };

    setIncidents([incident, ...incidents]);
    onNewIncident(newIncident.severity); 
    setNewIncident({ title: "", description: "", severity: "Medium" });
    setShowForm(false);
    setShowToast(true);
  };
  const toggleDetails = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="incident-list-container">
        {/* show taost message  */}
        <ToastContainer className="" position="top-end" z-index="10" style={{marginTop:'8rem'}}>
  <Toast 
    show={showToast} 
    onClose={() => setShowToast(false)}
    autohide
    delay={3000}
  >
    <Toast.Body>Incident submitted!</Toast.Body>
  </Toast>
</ToastContainer>
      <div className="controls">
        <div className="filter-control">
          <label htmlFor="severity-filter">Filter by Severity:</label>
          <select 
            id="severity-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
          >
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="sort-control">
          <label htmlFor="sort-order">Sort by Date:</label>
          <select
            id="sort-order"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as any)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        <button 
          className="add-incident-btn"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus size={16} /> {showForm ? "Cancel" : "Report New Incident"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="incident-form">
          <h3>Report New Incident</h3>
          <div className="form-group">
            <label>Title*</label>
            <input
              type="text"
              value={newIncident.title}
              onChange={(e) => setNewIncident({...newIncident, title: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Description*</label>
            <textarea
              value={newIncident.description}
              onChange={(e) => setNewIncident({...newIncident, description: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Severity</label>
            <div className="severity-options">
              {(["Low", "Medium", "High"] as const).map((level) => (
                <label key={level}>
                  <input
                    type="radio"
                    name="severity"
                    checked={newIncident.severity === level}
                    onChange={() => setNewIncident({...newIncident, severity: level})}
                  />
                  {level}
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="submit-btn">Submit Incident</button>
        </form>
      )}

      <div className="incidents">
        {filteredIncidents.map((incident) => (
          <div 
            key={incident.id} 
            className={`incident-item ${incident.severity.toLowerCase()}`}
          >
            <div className="incident-header">
              <div className="severity-indicator">
                <ExclamationCircle className={`icon-${incident.severity.toLowerCase()}`} />
                <span>{incident.severity}</span>
              </div>
              <div className="incident-meta">
                <span className="title">{incident.title}</span>
                <span className="date">
                  <Clock size={12} /> {new Date(incident.reported_at).toLocaleDateString()}
                </span>
              </div>
              <button 
                className="toggle-details"
                onClick={() => toggleDetails(incident.id)}
              >
                {expandedId === incident.id ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            
            {expandedId === incident.id && (
              <div className="incident-details ms-lg-5" >
                <p>{incident.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncidentList;