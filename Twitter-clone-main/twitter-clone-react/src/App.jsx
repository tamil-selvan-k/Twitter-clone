import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./page/Landing";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Profile from "./page/Profile";
import Messages from "./page/Messages";

import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />

        {/* Future Pages */}
        {/* <Route path="/explore" element={<Explore />} /> */}
        {/* <Route path="/notifications" element={<Notifications />} /> */}
        {/* <Route path="/bookmarks" element={<Bookmarks />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;