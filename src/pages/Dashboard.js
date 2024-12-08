import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [agreements, setAgreements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAgreements();
  }, []);

  const fetchAgreements = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/agreements")
      .then((response) => {
        setAgreements(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this agreement?")) {
      axios
        .delete(`http://localhost:5000/agreements/${id}`)
        .then(() => {
          alert("Agreement deleted successfully!");
          // Remove the deleted agreement from state
          setAgreements(agreements.filter((agreement) => agreement.id !== id));
        })
        .catch((error) => console.error("Error deleting agreement:", error));
    }
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mt-5 w-75">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0 text-center">Employment  Dashboard</h3>
        </div>
        <div className="card-body text-center mt-3">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Position</th>
                <th>Agreement Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {agreements.map((agreement) => (
                <tr key={agreement.id}>
                  <td>{agreement.id}</td>
                  <td>{agreement.employeeName}</td>
                  <td>{agreement.department}</td>
                  <td>{agreement.position}</td>
                  <td>{new Date(agreement.agreementDate).toLocaleDateString()}</td>
                  <td className="p-3">
                    <Link to={`/view/${agreement.id}`} className="btn btn-info btn-sm">
                      View
                    </Link>
                    <Link
                      to={`/update/${agreement.id}`}
                      className="btn btn-warning btn-sm mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(agreement.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer text-center">
          <Link to="/create" className="btn btn-success">
            New Agreement
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
