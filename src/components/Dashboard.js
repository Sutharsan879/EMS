import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [agreements, setAgreements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/agreements")
      .then((response) => {
        setAgreements(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Employment Agreements</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Agreement Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {agreements.map((agreement) => (
            <tr key={agreement.id}>
              <td>{agreement.id}</td>
              <td>{agreement.employeeName}</td>
              <td>{agreement.department}</td>
              <td>{agreement.position}</td>
              <td>{agreement.agreementDate}</td>
              <td>
                <Link to={`/view/${agreement.id}`} className="btn btn-primary btn-sm">
                  View
                </Link>
                <Link to={`/update/${agreement.id}`} className="btn btn-warning btn-sm mx-2">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/create" className="btn btn-success mt-3">
        Create New Agreement
      </Link>
    </div>
  );
};

export default Dashboard;
