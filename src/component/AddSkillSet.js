import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SkillSetService from "../services/SkillSet.service";

const AddSkillSet = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [industryCategory, setIndustryCategory] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");
  //   const history = useHistory();

  const saveSkillSet = (e) => {
    e.preventDefault();

    const SkillSet = {
      name: name,
      industryCategory: industryCategory,
      type: type,
      level: level,
    };
    if (id) {
      //update
      SkillSetService.update(id, SkillSet)
        .then((response) => {
          console.log("SkillSet data updated successfully", response.data);
          //   history.push("/");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create
      SkillSetService.create(SkillSet)
        .then((response) => {
          console.log("SkillSet added successfully", response.data);
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
      SkillSetService.get(+id)
        .then((SkillSet) => {
          console.log(SkillSet);
          setName(SkillSet.data.name);
          setIndustryCategory(SkillSet.data.industryCategory);
          setType(SkillSet.data.type);
          setLevel(SkillSet.data.level);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <h3>Add SkillSet</h3>
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
            type="text"
            className="form-control col-4"
            id="industryCategory"
            value={industryCategory}
            onChange={(e) => setIndustryCategory(e.target.value)}
            placeholder="Enter industry category"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter type"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            placeholder="Enter level"
          />
        </div>
        <div>
          <button onClick={(e) => saveSkillSet(e)} className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
      <hr />
      <Link to="/skillsets">
        <button type="button" class="btn btn-warning">
          Back to List
        </button>
      </Link>
    </div>
  );
};

export default AddSkillSet;
