import './app.scss'
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { BrowserRouter as Router, Route, Link, Routes,Navigate  } from "react-router-dom";

function App() {
  const user =true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate  to="/register" />} exact />
        <Route path="/register" element={!user ? <Register /> : <Navigate  to="/" />}  />
        <Route path="/login" element={!user ? <Login /> : <Navigate  to="/" />}  />
        { user && (
        <>
        <Route path="/movies" element={<Home type="movies"/>} />
        <Route path="/series" element={<Home type="series"/>} />
        <Route path="/watch" element={<Watch />} />
        </>)}


      </Routes>
    </Router>
  );
}

export default App;
