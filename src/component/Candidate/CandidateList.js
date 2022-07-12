import CandidateInfo from "./CandidateInfo";

export default function CandidateList(props) {
  if (props.sources.length === 0) {
    return <h2>No Candidate Found In Data</h2>;
  }
  return (
    <ul>
      {props.sources.map((candidate) => (
        <CandidateInfo sources={candidate} />
      ))}
    </ul>
  );
}
