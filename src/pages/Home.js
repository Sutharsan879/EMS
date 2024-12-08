import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-bold text-dark text-center py-5 bg-secondary " >
        <h1 className="display-4"><b>Welcome to the Employment Agreement System</b></h1>
        <p className="lead mt-3">
          Manage employment agreements efficiently and securely.
        </p>
        <div className="mt-5">
          <Link to="/dashboard" className="btn btn-info btn-lg rounded-pill mx-2">
            Dashboard
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="container mt-5 p-3  ">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Create Agreements</h5>
                <p className="card-text">
                  Easily create new agreements for employees with pre-filled templates.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">View Details</h5>
                <p className="card-text">
                  View and track agreement details with a streamlined dashboard.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Update Agreements</h5>
                <p className="card-text">
                  Edit agreements quickly to keep employee records up-to-date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white mt-5 py-3 text-center">
        <p className="mb-0">&copy; 2024 Employment Agreement System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
