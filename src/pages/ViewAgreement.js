import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ViewAgreement = () => {
  const { id } = useParams();
  const [agreement, setAgreement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/agreements/${id}`)
      .then((response) => {
        setAgreement(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching agreement:", error);
        setError("Error fetching agreement details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  if (!agreement) return <p>Agreement not found!</p>;

  return (
    <div className="container mt-5 w-50">
      <div className="card shadow">
        <div className="card-header bg-info text-white">
          <h3 className="text-center">View Employment Agreement</h3>
        </div>
        <div className="card-body p-3">
          <p>
            <h5 className="card-title"><strong>Name : </strong>{agreement.employeeName}</h5>
          </p>
          <p>
            <strong>Department:</strong> {agreement.department}
          </p>
          <p>
            <strong>Position:</strong> {agreement.position}
          </p>
          <p>
            <strong>Agreement Date:</strong>{" "}
            {new Date(agreement.agreementDate).toLocaleDateString()}
          </p>
          <center >
          <div className="d-flex justify-content-end me-5">
            <Link to="/dashboard" className="btn btn-primary me-4">
              Back
            </Link>
            <Link to={`/update/${agreement.id}`} className="btn btn-warning">
              Edit
            </Link>
          </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ViewAgreement;
