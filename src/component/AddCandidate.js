import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CandidateService from "../services/Candidate.service";

const AddCandidate = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [dob, setDoB] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [seniority, setSeniority] = useState("");
  const [gpa, setGPA] = useState("");
  //   const history = useHistory();

  const saveCandidate = (e) => {
    e.preventDefault();

    const Candidate = {
      name: name,
      dateOfBirth: dob,
      location: location,
      occupation: occupation,
      seniority: seniority,
      gpa: gpa,
    };
    if (id) {
      //update
      CandidateService.update(id, Candidate)
        .then((response) => {
          console.log("Candidate data updated successfully", response.data);
          //   history.push("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create
      CandidateService.create(Candidate)
        .then((response) => {
          console.log("Candidate added successfully", response.data);
          //   history.push("/");
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      console.log(+id);
      CandidateService.get(+id)
        .then((candidate) => {
          console.log(candidate);
          setName(candidate.data.name);
          setLocation(candidate.data.location);
          setDoB(candidate.data.dateOfBirth);
          setOccupation(candidate.data.occupation);
          setSeniority(candidate.data.seniority);
          setGPA(candidate.data.gpa);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <h3>Add Candidate</h3>
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control col-4"
            id="date-of-birth"
            value={dob}
            onChange={(e) => setDoB(e.target.value)}
            placeholder="Enter date of birth"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            placeholder="Enter Occupation"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="seniority"
            value={seniority}
            onChange={(e) => setSeniority(e.target.value)}
            placeholder="Enter seniority"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control col-4"
            id="gpa"
            value={gpa}
            min={0}
            onChange={(e) => setGPA(e.target.value)}
            placeholder="Enter gpa"
          />
        </div>
        <div>
          <button onClick={(e) => saveCandidate(e)} className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
      <hr />
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default AddCandidate;
