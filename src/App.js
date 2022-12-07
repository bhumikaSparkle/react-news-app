import "./App.css";
import { Routes, Route } from "react-router-dom";
import News from "./Pages/News";
import Header from "./Components/Header";
import LoadingBar from 'react-top-loading-bar';
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(20);
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_APIKEY
  // const apiKey = "hhhhhhhhhhhhh"
  return (
    <>
      <LoadingBar color="aqua" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Header />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
      </Routes>
    </>
  );
}

export default App;
