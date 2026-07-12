import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Profile from "./page/Profile";
import Messages from "./page/Messages";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
