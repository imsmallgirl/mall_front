import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Join from "./pages/Join";
import Login from "./pages/Login";
import UserInfo from "./pages/UserInfo";
import { RecoilRoot } from "recoil";
import Footer from "./components/footer/Footer";

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
        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
