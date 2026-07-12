import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Profile from "./page/Profile";
import Messages from "./page/Messages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
