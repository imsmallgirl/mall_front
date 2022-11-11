import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Join from "./pages/Join";
import Login from "./pages/Login";
import UserInfo from "./pages/UserInfo";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/user/:id" element={<UserInfo />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
