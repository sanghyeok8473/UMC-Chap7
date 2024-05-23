import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/pages/Home";
import Movies from "./Components/pages/Movies";
import TV from "./Components/pages/TV";
import Celebrity from "./Components/pages/Celebrity";
import NotFound from "./Components/pages/NotFound";
import Header from "./Components/Header";
import MovieDetail from "./Components/pages/MovieDetail";

function App() {
  return (
    <div className="root-wrap">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie/*" element={<Movies />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/person" element={<Celebrity />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;