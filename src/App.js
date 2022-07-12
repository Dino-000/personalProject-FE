import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import { Route, Routes } from "react-router-dom";
import Underconstruction from "./component/UnderContruction/Underconstruction";
import FormCandidateCreate from "./component/Candidate/FormCandiateCreate";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/under-construction">
          <Underconstruction />
        </Route>
      </Routes>
      <FormCandidateCreate />
      <FormCandidateCreate />
      <Footer />
    </div>
  );
}

export default App;
