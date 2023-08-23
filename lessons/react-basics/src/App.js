import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import StudentInformation from "./components/student/StudentInformation";
import MovieIndex from "./components/Movie/MovieIndex";
import PresidentsIndex from "./components/Presidents/PresidentsIndex";
import JobIndex from "./components/jobs/JobIndex";
import PokeIndex from "./components/Pokemon/PokeIndex";
import StateExample from "./components/StateExamples/StateExample";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <AboutMe /> */}
      {/* <StudentInformation /> */}
      {/* <MovieIndex /> */}
      {/* <PresidentsIndex /> */}
      {/* <JobIndex /> */}
      {/* <PokeIndex /> */}
      <StateExample />
    </div>
  );
}

export default App;
