import Home from "./pages/Home";
import AddNewNotes from "./pages/AddNewNotes";
import Archived from "./pages/Archived";
import DetailNote from "./pages/DetailNote";
import { Routes, Route, Link } from "react-router-dom";
import "./styles/notes-app.css";

const NotesApp = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-item">
                Notes App
              </Link>
            </li>
            <li>
              <Link to="/archives" className="nav-item">
                Archives
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archives" element={<Archived />} />
          <Route path="/notes/new" element={<AddNewNotes />} />
          <Route path="/notes/:id" element={<DetailNote />} />
        </Routes>
      </main>
    </>
  );
};

export default NotesApp;
