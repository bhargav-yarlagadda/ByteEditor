import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/homescreen/HomeScreen";
import PlayGroundScreen from "./screens/playgroundscreen/PlayGroundScreen";
import PlaygroundContextProvider from "./context/PlaygroundContext";
import ModalProvider from "./context/ModalProvider";
const App = () => {
  return (
    <PlaygroundContextProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/playground/:folderId/:fileId" element={<PlayGroundScreen />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PlaygroundContextProvider>
  );
};

export default App;
