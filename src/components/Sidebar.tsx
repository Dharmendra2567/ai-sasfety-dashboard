import React, { useState } from "react";
import { 
  House, 
  ExclamationTriangle, 
  PlusCircle, 
  Clock, 
//   ChartBar, 
  Shield, 
  Gear, 
  QuestionCircle 
} from "react-bootstrap-icons";
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const randomUser = "Dr. Safety Expert";

  const menuItems = [
    { name: "Dashboard", icon: <House className="sidebar-icon" /> },
    { name: "Incidents", icon: <ExclamationTriangle className="sidebar-icon" /> },
    { name: "Report New", icon: <PlusCircle className="sidebar-icon" /> },
    { name: "Recent Activity", icon: <Clock className="sidebar-icon" /> },
    // { name: "Analytics", icon: <ChartBar className="sidebar-icon" /> },
    { name: "Safety Protocols", icon: <Shield className="sidebar-icon" /> },
    { name: "Settings", icon: <Gear className="sidebar-icon" /> },
    { name: "Help Center", icon: <QuestionCircle className="sidebar-icon" /> }
  ];

  return (
    <>
      <button 
        className="sidebar-mobile-toggle btn btn-primary d-lg-none"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div 
        className={`sidebar ${collapsed ? "collapsed" : ""} ${mobileOpen ? "mobile-open" : ""}`}
      >
        <div className="sidebar-profile">
          <div className="profile-avatar">
            {randomUser.split(" ").map(name => name[0]).join("")}
          </div>
          <h3 className="profile-name">{randomUser}</h3>
          <p className="profile-role">AI Safety Officer</p>
        </div>

        {/* Menu Items */}
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              {item.icon}
              <span className="menu-text">{item.name}</span>
            </li>
          ))}
        </ul>

        <button 
          className="sidebar-toggle"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "»" : "«"}
        </button>
      </div>
    </>
  );
};

export default Sidebar;