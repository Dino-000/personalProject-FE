import React, { useState } from "react";

export default function FormCandidateCreate(props) {
  if (props.sources.name === undefined) {
    console.log("ok");
  }
  console.log(props.sources.name);
  const [enteredName, setEnteredName] = useState("");
  const [enteredDob, setEnteredDob] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredOccupation, setEnteredOccupation] = useState("");
  const [enteredSeniority, setEnteredSeniority] = useState("");
  const [enteredGPA, setEnteredGPA] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const dobChangeHandler = (event) => {
    setEnteredDob(event.target.value);
  };
  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };
  const occupationChangeHandler = (event) => {
    setEnteredOccupation(event.target.value);
  };
  const seniorityChangeHandler = (event) => {
    setEnteredSeniority(event.target.value);
  };
  const gpaChangeHandler = (event) => {
    setEnteredGPA(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let newCandidate = {
      name: enteredName,
      dateOfBirth: enteredDob,
      location: enteredLocation,
      occupation: enteredOccupation,
      seniority: enteredSeniority,
      gpa: enteredGPA,
    };

    console.log(JSON.stringify(newCandidate));
  };

  return (
    <div className="container">
      <form action="" onSubmit={submitHandler}>
        <fieldset>
          <legend>Candidate Personal Information</legend>

          <div className="mb-3">
            <label class="form-label" htmlFor="candidate-name">
              Name:
            </label>
            <input
              type="text"
              name="candidate-name"
              class="form-label"
              id="candidate-name"
              placeholder="Ex: Susan Boyce "
              onChange={nameChangeHandler}
              value={enteredName}
            />
          </div>
          <div className="mb-3">
            <label class="form-label" htmlFor="candidate-dob">
              Date of Birth:
            </label>
            <input
              type="date"
              name="candidate-dob"
              className="form-control"
              id="candidate-dob"
              min="1940-01-01"
              max="2002-01-01"
              onChange={dobChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label class="form-label" htmlFor="candidate-location">
              Location:
            </label>
            <select
              class="form-select"
              name="candidate-location"
              id="candidate-location"
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
          <div className="mb-3">
            <label class="form-label" htmlFor="candidate-occupation">
              Occupation:
            </label>
            <input
              type="text"
              name="candidate-occupation"
              className="form-control"
              id="candidate-occupation"
              placeholder="Ex: Digital Marketing Specialist "
              onChange={occupationChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label class="form-label" htmlFor="candidate-seniority">
              Seniority:
            </label>
            <select
              name="candidate-seniority"
              class="form-select"
              id="candidate-seniority"
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
          <div className="mb-3">
            <label class="form-label" htmlFor="candidate-gpa">
              GPA (0-10):
            </label>
            <input
              type="number"
              name="candidate-gpa"
              className="form-control"
              id="candidate-gpa"
              min={0}
              max={10}
              onChange={gpaChangeHandler}
            />
          </div>
          <button type="submit" class="btn btn-primary mb-2">
            Add New Candidate
          </button>
        </fieldset>
      </form>
    </div>
  );
}
