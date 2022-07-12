import React from "react";

export default function FormCandidateCreate(props) {
  return (
    <div className="container">
      <form action="">
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
              value="2000-01-01"
              min="1940-01-01"
              max="2002-01-01"
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
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
