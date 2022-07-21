import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CandidateService from "../services/Candidate.service";
import { useDispatch, useSelector } from "react-redux";
import { candidateActions } from "../store/candidate";

const AddCandidate = () => {
  const dispatch = useDispatch();
  const candidate = useSelector((state) => state.candidate);

  const { id } = useParams();

  const saveCandidate = (e) => {
    e.preventDefault();

    const Candidate = {
      name: candidate.name,
      dateOfBirth: candidate.dob,
      location: candidate.location,
      occupation: candidate.occupation,
      seniority: candidate.seniority,
      gpa: candidate.gpa,
    };
    if (id) {
      //update
      CandidateService.update(id, Candidate)
        .then((response) => {
          console.log("Candidate data updated successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create
      CandidateService.create(Candidate)
        .then((response) => {
          console.log("Candidate added successfully", response.data);
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      console.log("This is id: " + id);
      CandidateService.get(+id)
        .then((candidateInfo) => {
          console.log(candidateInfo.data);
          dispatch(candidateActions.setName(candidateInfo.data.name));
          dispatch(candidateActions.setLocation(candidateInfo.data.location));
          dispatch(candidateActions.setDob(candidateInfo.data.dateOfBirth));
          dispatch(
            candidateActions.setOccupation(candidateInfo.data.occupation)
          );
          dispatch(candidateActions.setSeniority(candidateInfo.data.seniority));
          dispatch(candidateActions.setGpa(candidateInfo.data.gpa));
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  const nameChangeHandler = (e) => {
    dispatch(candidateActions.setName(e.target.value));
    console.log("name is changing to: " + e.target.value);
  };
  const dobChangeHandler = (e) => {
    dispatch(candidateActions.setDob(e.target.value));
    console.log("dob is changing to: " + e.target.value);
  };
  const locationChangeHandler = (e) => {
    dispatch(candidateActions.setLocation(e.target.value));
    console.log("location is changing to: " + e.target.value);
  };
  const occupationChangeHandler = (e) => {
    dispatch(candidateActions.setOccupation(e.target.value));
    console.log("occupation is changing to: " + e.target.value);
  };
  const seniorityChangeHandler = (e) => {
    dispatch(candidateActions.setSeniority(e.target.value));
    console.log("seniority is changing to: " + e.target.value);
  };
  const gpaChangeHandler = (e) => {
    dispatch(candidateActions.setGpa(e.target.value));
    console.log("gpa is changing to: " + e.target.value);
  };

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
            value={candidate.name}
            onChange={nameChangeHandler}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control col-4"
            id="date-of-birth"
            value={candidate.dob}
            onChange={dobChangeHandler}
            placeholder="Enter date of birth"
          />
        </div>
        <div className="form-group">
          <select
            class="form-control col-4 form-select"
            name="candidate-location"
            id="candidate-location"
            value={candidate.location}
            onChange={locationChangeHandler}
          >
            <optgroup label="Domestic areas">
              <option value="Ho Chi Minh City">Ho Chi Minh City</option>
              <option value="Ha Noi City">Ha Noi City</option>
              <option value="Da Nang City">Da Nang City</option>
              <option value="Can Tho City">Can Tho City</option>
            </optgroup>
            <optgroup label="Foreign areas">
              <option value="Singapore">Singapore</option>
              <option value="Thailand">Thailand</option>
              <option value="India">India</option>
              <option value="Zurich">Zurich</option>
            </optgroup>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="occupation"
            value={candidate.occupation}
            onChange={occupationChangeHandler}
            placeholder="Enter Occupation"
          />
        </div>
        <div className="form-group">
          <select
            name="candidate-seniority"
            class="form-control col-4 form-select"
            id="candidate-seniority"
            value={candidate.seniority}
            onChange={seniorityChangeHandler}
          >
            <option value="Internship">Internship</option>
            <option value="Fresher">Fresher</option>
            <option value="Associate">Associate</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Senior">Senior</option>
            <option value="Lead">Lead</option>
            <option value="Manager">Manager</option>
            <option value="C-level">C-level</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control col-4"
            id="gpa"
            value={candidate.gpa}
            min={0}
            onChange={gpaChangeHandler}
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
      <Link to="/candidates">
        <button type="button" class="btn btn-warning">
          Back to List
        </button>
      </Link>
    </div>
  );
};

export default AddCandidate;
