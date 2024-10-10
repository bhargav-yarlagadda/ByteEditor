import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/homescreen/HomeScreen";
import PlayGroundSceen from "./screens/playgroundscreen/PlayGroundSceen";
import PlaygroundContextProvider from "./context/PlaygroundContext";
import ModalProvider from "./context/ModalProvider";
const App = () => {
  return (
    <PlaygroundContextProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/playground" element={<PlayGroundSceen />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PlaygroundContextProvider>
  );
};

export default App;
