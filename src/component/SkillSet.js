import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkillSetService from "../services/SkillSet.service";

const SkillSetList = () => {
  const [skillSets, setSkillSets] = useState([]);

  const init = () => {
    SkillSetService.getAll()
      .then((response) => {
        console.log("Printing SkillSet data", response.data);
        setSkillSets(response.data);
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
    SkillSetService.remove(id)
      .then((response) => {
        console.log("SkillSet deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container">
      <h3>List of SkillSet</h3>
      <hr />
      <div>
        <Link to="/skillSets/add" className="btn btn-primary mb-2">
          Add SkillSet
        </Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Industry Category</th>
              <th>Name</th>
              <th>Type</th>
              <th>Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {skillSets.map((SkillSet) => (
              <tr key={SkillSet.id}>
                <td>{SkillSet.id}</td>
                <td>{SkillSet.industryCategory}</td>
                <td>{SkillSet.name}</td>
                <td>{SkillSet.type}</td>
                <td>{SkillSet.level}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/skillSets/edit/${SkillSet.id}`}
                  >
                    Update
                  </Link>

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(SkillSet.id);
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

export default SkillSetList;
