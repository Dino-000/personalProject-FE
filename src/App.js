import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import { Route, Routes } from "react-router-dom";
import Underconstruction from "./component/UnderContruction/Underconstruction";
import FormCandidateCreate from "./component/Candidate/FormCandiateCreate";
import CandidateList from "./component/Candidate";
import AddCandidate from "./component/AddCandidate";
import AddSkillSet from "./component/AddSkillSet";
import SkillSetList from "./component/SkillSet";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/underconstruction" element={<Underconstruction />} />
        <Route path="/candidate-add" element={<FormCandidateCreate />} />
        <Route path="/candidates" element={<CandidateList />} />
        <Route path="/candidates/add" element={<AddCandidate />} />
        <Route path="/candidates/edit/:id" element={<AddCandidate />} />
        <Route path="/skillsets" element={<SkillSetList />} />

        <Route path="/skillsets/add" element={<AddSkillSet />} />
        <Route path="/skillsets/edit/:id" element={<AddSkillSet />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
