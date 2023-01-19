import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from "./Pages/WelcomePage";
import Cars from "./Pages/Cars";
import SignUp from "./Pages/SignUp";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<WelcomePage />} />
        <Route path="/cars" exact element={<Cars />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/sign-up" exact element={<SignUp />} />
      </Routes>
    </div>
  );
}
export default App;
