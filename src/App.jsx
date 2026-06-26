import "./App.css";

import Navbar from "./components/Navbar";
import Resumen from "./components/Resumen";
import InyeccionSQL from "./components/InyeccionSQL";
import XSS from "./components/XSS";
import Comandos from "./components/Comandos";
import Prompts from "./components/Prompts";

function App() {
  return (
    <>
      <Navbar />

      <header className="hero">
        <h1>Auditoría de Seguridad Web</h1>
        <p>Municipalidad de Cerro Verde</p>
      </header>

      <main className="contenedor">
        <Resumen />
        <InyeccionSQL />
        <XSS />
        <Comandos />
        <Prompts />
      </main>
    </>
  );
}

export default App;