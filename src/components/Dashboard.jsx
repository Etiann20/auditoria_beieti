import {
  FaBug,
  FaDatabase,
  FaShieldAlt,
  FaExclamationTriangle,
  FaReact,
  FaMarkdown,
  FaLock,
  FaServer
} from "react-icons/fa";

function Dashboard() {
  return (
    <section id="dashboard" className="card">

      <h2>Resumen de la Auditoría</h2>

      <p>
        Este panel resume los principales resultados obtenidos durante la
        auditoría realizada al portal de la Municipalidad de Cerro Verde.
      </p>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <FaBug className="dash-icon" />

          <h3>3</h3>

          <p>Vulnerabilidades detectadas</p>

        </div>

        <div className="dashboard-card">

          <FaDatabase className="dash-icon" />

          <h3>4</h3>

          <p>Activos críticos</p>

        </div>

        <div className="dashboard-card">

          <FaShieldAlt className="dash-icon" />

          <h3>10.0</h3>

          <p>CVSS Máximo</p>

        </div>

        <div className="dashboard-card">

          <FaExclamationTriangle className="dash-icon" />

          <h3>Alto</h3>

          <p>Riesgo General</p>

        </div>

      </div>

      <h3>Resumen Ejecutivo</h3>

      <p>
        Durante la auditoría se identificaron tres vulnerabilidades
        principales: SQL Injection, Reflected XSS y Command Injection.
        Luego de evaluar cada una mediante la metodología CVSS v3.1, se
        determinó que Command Injection representa el mayor riesgo para el
        portal de la Municipalidad de Cerro Verde debido al impacto que
        tendría sobre el servidor y los servicios municipales.
      </p>

      <h3>Tecnologías y Metodologías Utilizadas</h3>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <FaReact className="dash-icon" />

          <p>React + Vite</p>

        </div>

        <div className="dashboard-card">

          <FaMarkdown className="dash-icon" />

          <p>Markdown</p>

        </div>

        <div className="dashboard-card">

          <FaLock className="dash-icon" />

          <p>OWASP / CVSS</p>

        </div>

        <div className="dashboard-card">

          <FaServer className="dash-icon" />

          <p>DVWA</p>

        </div>

      </div>

      <h3>Conclusión General</h3>

      <p>
        La auditoría permitió identificar los principales riesgos presentes
        en la aplicación evaluada y establecer un conjunto de medidas de
        prevención, mitigación y recuperación orientadas a proteger la
        información administrada por la Municipalidad de Cerro Verde.
      </p>

    </section>
  );
}

export default Dashboard;