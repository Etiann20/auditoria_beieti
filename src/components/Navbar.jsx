import { FaShieldAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <FaShieldAlt />
      </div>

      <div className="nav-links">
        <a href="#">Inicio</a>
        <a href="#resumen">Resumen</a>
        <a href="#activos">Activos</a>
        <a href="#matriz">Matriz</a>
        <a href="#controles">Controles</a>
        <a href="#sqli">SQLi</a>
        <a href="#xss">XSS</a>
        <a href="#comandos">Command</a>
        <a href="#recuperacion">Recuperación</a>
        <a href="#prompts">IA</a>
      </div>

    </nav>
  );
}

export default Navbar;