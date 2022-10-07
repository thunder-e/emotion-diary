import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RouteTest from "./components/RouteTest";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

/*
  <BrowserRouter></BrowserRouter>로 감싸져 있으면 브라우저 URL과 맵핑될 수 있다.
*/

export default App;
