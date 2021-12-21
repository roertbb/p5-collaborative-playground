import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SandpackWrapper } from "./components/SandpackWrapper";
import { WelcomePage } from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path=":roomId" element={<SandpackWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
