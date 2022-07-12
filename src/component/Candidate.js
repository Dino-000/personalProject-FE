import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CandidateService from "../services/Candidate.service";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  const init = () => {
    CandidateService.getAll()
      .then((response) => {
        console.log("Printing candidate data", response.data);
        setCandidates(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log("Printing id", id);
    CandidateService.remove(id)
      .then((response) => {
        console.log("candidate deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container">
      <h3>List of Candidate</h3>
      <hr />
      <div>
        <Link to="/candidates/add" className="btn btn-primary mb-2">
          Add Candidate
        </Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>D.o.B</th>
              <th>Location</th>
              <th>Occupation</th>
              <th>Seniority</th>
              <th>Gpa</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.id}</td>
                <td>{candidate.name}</td>
                <td>{candidate.dateOfBirth}</td>
                <td>{candidate.location}</td>
                <td>{candidate.occupation}</td>
                <td>{candidate.seniority}</td>
                <td>{candidate.gpa}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/candidate/edit/${candidate.id}`}
                  >
                    Update
                  </Link>

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(candidate.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateList;
