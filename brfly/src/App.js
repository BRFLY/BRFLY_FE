import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./components/Auth";
import Calendar from "./pages/Calendar";
import News from "./pages/News";

function App() {
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/kakao" element={<Auth />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
