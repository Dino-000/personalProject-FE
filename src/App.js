import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import { Route, Routes } from "react-router-dom";
import Underconstruction from "./component/UnderContruction/Underconstruction";
import FormCandidateCreate from "./component/Candidate/FormCandiateCreate";
import CandidateList from "./component/Candidate";
import AddCandidate from "./component/AddCandidate";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/under-construction" element={<Underconstruction />} />
        <Route path="/candidate-add" element={<FormCandidateCreate />} />
        <Route path="/candidate-list" element={<CandidateList />} />
        <Route path="/form" element={<CandidateList />} />
        <Route path="/" element={<CandidateList />} />
        <Route path="/add-candidate" element={<AddCandidate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
