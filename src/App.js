import React from "react";
import { Route, Routes } from "react-router-dom"; // Switch 대신 Routes를 import합니다.

import Home from "./Components/pages/Home";
import Movies from "./Components/pages/Movies";
import TV from "./Components/pages/TV";
import Celebrity from "./Components/pages/Celebrity";
import Header from "./Components/Header";

function App() {
  return (
    <div className="root-wrap">
      <Header />
      <Routes>
        {" "}
        {/* Switch 대신 Routes를 사용 */}
        <Route exact path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/person" element={<Celebrity />} />
      </Routes>
    </div>
  );
}

export default App;