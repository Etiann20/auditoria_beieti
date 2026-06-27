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
  FaArrowDown,
} from "react-icons/fa";

function App() {

  const irAuditoria = () => {
    document.getElementById("dashboard").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>

      <Navbar />

      <div className="progress"></div>

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

          <div className="landing-stats">

            <div>

              <strong>3</strong>

              <span>Vulnerabilidades Analizadas</span>

            </div>

            <div>

              <strong>4</strong>

              <span>Activos Identificados</span>

            </div>

            <div>

              <strong>10.0</strong>

              <span>CVSS Máximo</span>

            </div>

            <div>

              <strong>Alto</strong>

              <span>Riesgo General</span>

            </div>

          </div>

        </div>

        {/* ESTE </div> ES EL QUE TE FALTABA */}

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

      <main className="contenedor">

        <Dashboard />

        <Timeline />

        <Resumen />

        <InyeccionSQL />

        <XSS />

        <Comandos />

        <Activos />

        <Matriz />

        <Controles />

        <Recuperacion />

        <Prompts />

      </main>

      <BackToTop />

      <footer>

        <h3>Auditoría de Seguridad Web</h3>

        <p>Municipalidad de Cerro Verde</p>

        <p>
          Proyecto desarrollado para la asignatura
          Fundamentos de Seguridad de la Información.
        </p>

        <p>Etiann Beiza · INACAP · 2026</p>

      </footer>

    </>
  );
}

export default App;