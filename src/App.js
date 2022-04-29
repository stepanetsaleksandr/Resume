import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Objective from "./components/Objective";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Responsibilities from "./components/Responsibilities";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";

function App() {
  return (
    <div className='App d-flex-column m-3 p-1  justify-content-center align-items-center border border rounded-3 shadow'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-auto  '>
            <Contacts />
            <Skills />
            <Education />
          </div>
          <div className='col  '>
            <Header />
            <Objective />
            <Highlights />
            <Experience />
            <Responsibilities />
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
