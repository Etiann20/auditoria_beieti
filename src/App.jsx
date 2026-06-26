import "./App.css";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import BackToTop from "./components/BackToTop";
import Timeline from "./components/Timeline";
import Resumen from "./components/Resumen";
import InyeccionSQL from "./components/InyeccionSQL";
import XSS from "./components/XSS";
import Comandos from "./components/Comandos";
import Prompts from "./components/Prompts";
import Activos from "./components/Activos";
import Matriz from "./components/Matriz";
import Controles from "./components/Controles";
import Recuperacion from "./components/Recuperacion";

import {
  FaUserGraduate,
  FaUniversity,
  FaCalendarAlt,
  FaShieldAlt,
  FaArrowDown
} from "react-icons/fa";

function App() {

  const irAuditoria = () => {
    document.getElementById("resumen").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>

      {/* Barra superior */}
      <Navbar />

      {/* Barra de progreso */}
      <div className="progress"></div>

      {/* Landing */}
      <header className="landing">

        <div className="landing-left">

          <FaShieldAlt className="shield" />

          <h1>Auditoría de Seguridad Web</h1>

          <h2>Municipalidad de Cerro Verde</h2>

          <p>
            Informe de auditoría realizado sobre una aplicación web
            vulnerable (DVWA), evaluando vulnerabilidades, riesgos y
            controles de seguridad para el portal de la Municipalidad
            de Cerro Verde.
          </p>

          <button
            onClick={irAuditoria}
            className="landing-btn"
          >
            <FaArrowDown />
            Ver Auditoría
          </button>

        </div>

        <div className="landing-right">

          <div className="info-card">

            <div>
              <FaUserGraduate />
              <h3>Alumno</h3>
              <p>Etiann Beiza</p>
            </div>

            <div>
              <FaUniversity />
              <h3>Institución</h3>
              <p>INACAP</p>
            </div>

            <div>
              <FaCalendarAlt />
              <h3>Año</h3>
              <p>2026</p>
            </div>

          </div>

        </div>

      </header>

      {/* Dashboard */}
      <Dashboard />

      {/* Timeline */}
      {/* <Timeline /> */}

      {/* Contenido */}
      <main className="contenedor">

      <Resumen />

<Activos />

<Matriz />

<InyeccionSQL />

<XSS />

<Comandos />

<Controles />

<Recuperacion />


<Prompts />

      </main>

      {/* Botón subir */}
      <BackToTop />

      {/* Footer */}
      <footer>

        <h3>Auditoría de Seguridad Web</h3>

        <p>Municipalidad de Cerro Verde</p>

        <p>Fundamentos de Seguridad de la Información</p>

        <p>Etiann Beiza · INACAP · 2026</p>

      </footer>

    </>
  );
}

export default App;