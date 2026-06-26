import {
    FaExclamationTriangle,
    FaLock,
    FaSearch,
    FaTools,
    FaCheckCircle,
    FaClipboardList
  } from "react-icons/fa";
  
  function Recuperacion() {
    return (
      <section id="recuperacion" className="card">
  
        <h2>Plan de Recuperación ante Incidentes</h2>
  
        <p>
          En caso de detectarse una vulnerabilidad explotada o un incidente de
          seguridad en el portal de la Municipalidad de Cerro Verde, se propone
          el siguiente procedimiento de respuesta y recuperación.
        </p>
  
        <div className="recovery-flow">
  
          <div className="step">
            <FaExclamationTriangle />
            <h3>1. Detección</h3>
            <p>
              Identificar el incidente mediante alertas, monitoreo o reportes
              de usuarios.
            </p>
          </div>
  
          <div className="arrow">↓</div>
  
          <div className="step">
            <FaLock />
            <h3>2. Contención</h3>
            <p>
              Aislar el sistema comprometido para evitar la propagación del
              incidente.
            </p>
          </div>
  
          <div className="arrow">↓</div>
  
          <div className="step">
            <FaSearch />
            <h3>3. Análisis</h3>
            <p>
              Determinar el origen del incidente y evaluar el impacto sobre los
              activos de información.
            </p>
          </div>
  
          <div className="arrow">↓</div>
  
          <div className="step">
            <FaTools />
            <h3>4. Recuperación</h3>
            <p>
              Restaurar los servicios afectados, aplicar correcciones y validar
              su funcionamiento.
            </p>
          </div>
  
          <div className="arrow">↓</div>
  
          <div className="step">
            <FaCheckCircle />
            <h3>5. Verificación</h3>
            <p>
              Confirmar que el sistema opera correctamente y que la vulnerabilidad
              fue mitigada.
            </p>
          </div>
  
          <div className="arrow">↓</div>
  
          <div className="step">
            <FaClipboardList />
            <h3>6. Lecciones Aprendidas</h3>
            <p>
              Documentar el incidente, actualizar procedimientos y fortalecer
              las medidas de seguridad.
            </p>
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default Recuperacion;