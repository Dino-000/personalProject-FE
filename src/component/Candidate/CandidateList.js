import React from "react";
import CandidateInfo from "./CandidateInfo";

export default function CandidateLists(props) {
  if (props.sources.length === 0) {
    return <h2>No Candidate Found In Data</h2>;
  }
  return (
    <ul>
      {props.sources.map((candidate) => {
        return <CandidateInfo sources={candidate} />;
      })}
    </ul>
  );
}
