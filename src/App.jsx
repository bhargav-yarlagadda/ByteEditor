import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/homescreen/HomeScreen";
import PlayGroundSceen from "./screens/playgroundscreen/PlayGroundSceen";
import PlaygroundContext from "./context/PlaygroundContext";
const App = () => {
  return (
    <PlaygroundContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/playground" element={<PlayGroundSceen />} />
        </Routes>
      </BrowserRouter>
    </PlaygroundContext>
  );
};

export default App;
