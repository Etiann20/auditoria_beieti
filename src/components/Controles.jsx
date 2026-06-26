import {
    FaLock,
    FaDatabase,
    FaUserShield,
    FaClipboardCheck,
    FaBug,
    FaSyncAlt
  } from "react-icons/fa";
  
  function Controles() {
    return (
      <section id="controles" className="card">
  
        <h2>Controles de Seguridad Recomendados</h2>
  
        <p>
          A partir de las vulnerabilidades identificadas durante la auditoría,
          se proponen los siguientes controles de seguridad para reducir la
          probabilidad de explotación y fortalecer la seguridad del portal
          de la Municipalidad de Cerro Verde.
        </p>
  
        <div className="controles-grid">
  
          <div className="control-card">
            <FaDatabase />
            <h3>Consultas Parametrizadas</h3>
            <p>
              Evitar la concatenación directa de consultas SQL utilizando
              Prepared Statements.
            </p>
          </div>
  
          <div className="control-card">
            <FaLock />
            <h3>Validación de Entradas</h3>
            <p>
              Validar y sanitizar toda la información ingresada por los
              usuarios antes de procesarla.
            </p>
          </div>
  
          <div className="control-card">
            <FaUserShield />
            <h3>Mínimo Privilegio</h3>
            <p>
              Los usuarios y servicios solo deben poseer los permisos
              estrictamente necesarios.
            </p>
          </div>
  
          <div className="control-card">
            <FaClipboardCheck />
            <h3>Políticas de Seguridad</h3>
            <p>
              Implementar políticas para el desarrollo seguro y la gestión
              de vulnerabilidades.
            </p>
          </div>
  
          <div className="control-card">
            <FaBug />
            <h3>Pruebas Periódicas</h3>
            <p>
              Realizar auditorías y pruebas de penetración para detectar
              nuevas vulnerabilidades.
            </p>
          </div>
  
          <div className="control-card">
            <FaSyncAlt />
            <h3>Actualizaciones</h3>
            <p>
              Mantener servidores, aplicaciones y dependencias
              permanentemente actualizadas.
            </p>
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default Controles;