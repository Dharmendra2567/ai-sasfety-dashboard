import React from 'react';
import { 
  Github, 
  Linkedin, 
  Envelope,
  ShieldLock,
  Book
} from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-white">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="footer-brand">
              <ShieldLock className="me-2" size={20} />
              AI Sentinel
            </h5>
          </div>
        </div>
        <div className="footer-bottom mt-4 pt-3 border-top border-secondary">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} AI Sentinel. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Version 1.0.0 | Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;