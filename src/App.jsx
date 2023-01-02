import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Logueo from "./components/views/Logueo";
import FichaCliente from "./components/views/FichaCliente";
import RecuperarContraseña from "./components/views/RecuperarContraseña";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Logueo />} />
        <Route exact path="/cliente" element={<FichaCliente />} />
        <Route exact path="/contraseña" element={<RecuperarContraseña />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
