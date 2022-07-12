import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import { Route, Routes } from "react-router-dom";
import Underconstruction from "./component/UnderContruction/Underconstruction";
import FormCandidateCreate from "./component/Candidate/FormCandiateCreate";
import CandidateList from "./component/Candidate/CandidateList";
import { CandidateData } from "./component/Candidate/Candidate";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/under-construction" element={<Underconstruction />} />
        <Route
          path="/candidate-add"
          element={<FormCandidateCreate sources={CandidateData[0]} />}
        />
        <Route
          path="/candidate-list"
          element={<CandidateList sources={CandidateData} />}
        />
      </Routes>
      <FormCandidateCreate />
      <Footer />
    </div>
  );
}

export default App;
