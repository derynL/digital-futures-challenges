import Header from "./Components/Header";
import AllHeadlines from "./Components/AllHeadlines";
import Summary from "./Components/Summary";
import ErrorPage from "./Components/ErrorPage";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState("");

  const getHeadlines = async () => {
    try {
      const responseURL = await axios.get(process.env.REACT_APP_GUARDIAN_API);
      console.log(responseURL);
      setHeadlines(responseURL.data.response.results);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getHeadlines();
  }, []);
  return (
    <Router>
      <Header />
      {!error && headlines ? (
        <Routes>
          <Route path="/" element={<AllHeadlines headlines={headlines} />} />
          <Route path="/:id" element={<Summary stories={headlines} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<ErrorPage error={error} />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
