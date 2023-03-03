import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Books from "./components/Books";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="bookBody">
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
