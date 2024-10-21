import React from "react";
import {  Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/homescreen/HomeScreen";
import PlayGroundScreen from "./screens/playgroundscreen/PlayGroundScreen";
import PlaygroundContextProvider from "./context/PlaygroundContext";
import ModalProvider from "./context/ModalProvider";
import NotFound from "./components/notFound/NotFound";
import Landing from "./components/Landing";

const App = () => {
  return (

      <PlaygroundContextProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route
              path="/playground/:folderId/:fileId"
              element={<PlayGroundScreen />}
            />
            <Route path="/playground" element={<Landing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ModalProvider>
      </PlaygroundContextProvider>
    
  );
};

export default App;
