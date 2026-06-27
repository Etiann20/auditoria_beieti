import { FaShieldAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <FaShieldAlt />
      </div>

      <div className="nav-links">

        <a href="#">Inicio</a>

        <a href="#dashboard">Dashboard</a>

        <a href="#timeline">Proceso</a>

        <a href="#resumen">Resumen</a>

        <a href="#sqli">SQL Injection</a>

        <a href="#xss">Reflected XSS</a>

        <a href="#comandos">Command Injection</a>

        <a href="#activos">Activos</a>

        <a href="#matriz">Matriz</a>

        <a href="#controles">Controles</a>

        <a href="#recuperacion">Recuperación</a>

        <a href="#prompts">Prompts IA</a>

      </div>

    </nav>
  );
}

export default Navbar;