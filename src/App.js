import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Register from "./Register";
import { UserProvider } from "./UserContext";
import WebAuthnEndorsement from "./WebAuthnEndorsement";

function App() {
  const { pathName } = useLocation();
  return (
    <div className="App">
      <UserProvider>
        <Nav />
        <AnimatePresence initial={false} mode="wait">
          <Routes>
            <Route path="/" key={pathName} element={<WebAuthnEndorsement />} />
            <Route path="/register" key={pathName} element={<Register />} />
          </Routes>
        </AnimatePresence>
      </UserProvider>
    </div>
  );
}

export default App;
