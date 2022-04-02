import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import {
  PageStartup,
  PageReadme,
  PageDictionary,
  PagePlay,
  PageAnalytics,
} from "./pages";
import { useTypedSelector } from "./hooks/useTypedselector";

import "./App.css";

function App() {
  const isPlaying = true;

  return (
    <div className="App">
      <Routes>
        <Route index element={<PageStartup />} />
        <Route path="/readme" element={<PageReadme />} />
        <Route path="/dictionary" element={<PageDictionary />} />
        <Route path="/analytics" element={<PageAnalytics />} />
        <Route
          path="/play"
          element={isPlaying ? <PagePlay /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
