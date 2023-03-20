import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div id="page-top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tripslist" element={<TripsList />} />
          <Route path="/tripslist/:id" element={<TripDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
