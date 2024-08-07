import "./App.css";
import TopNavbar from "./components/TopNavbar";
import LeftNavbar from "./components/LeftNavbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <TopNavbar />

      <section className="main-container">
        <LeftNavbar />
        <Dashboard />
      </section>
    </div>
  );
}

export default App;
