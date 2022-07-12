export default function CandidateInfo(props) {
  return (
    <li className="container row">
      <div className="col-1">{props.sources.id}</div>
      <div className="col-2">{props.sources.name}</div>
      <div className="col-2">{props.sources.dateOfBirth}</div>
      <div className="col-2">{props.sources.location}</div>
      <div className="col-2">{props.sources.occupation}</div>
      <div className="col-2">{props.sources.seniority}</div>
      <div className="col-1">{props.sources.gpa}</div>
    </li>
  );
}
