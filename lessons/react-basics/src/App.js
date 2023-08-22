import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import StudentInformation from "./components/student/StudentInformation";
import MovieIndex from "./components/Movie/MovieIndex";
import PresidentsIndex from "./components/Presidents/PresidentsIndex";
import JobIndex from "./components/jobs/JobIndex";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      {/* <StudentInformation /> */}
      {/* <MovieIndex /> */}
      {/* <PresidentsIndex /> */}
      <JobIndex />
    </div>
  );
}

export default App;
