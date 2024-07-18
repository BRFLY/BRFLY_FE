import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import News from "./pages/News";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
