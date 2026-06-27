import {
  FaFlag,
  FaGlobe,
  FaServer,
  FaDatabase,
  FaCode,
  FaTerminal,
  FaChartBar,
  FaBoxes,
  FaShieldAlt,
  FaTools,
  FaCheckCircle
} from "react-icons/fa";

const eventos = [
  {
    icon: <FaFlag />,
    titulo: "Inicio del Proyecto",
    descripcion: "Definición del caso de estudio de la Municipalidad de Cerro Verde."
  },
  {
    icon: <FaGlobe />,
    titulo: "Análisis del Portal",
    descripcion: "Identificación de los servicios y de la información administrada."
  },
  {
    icon: <FaServer />,
    titulo: "Configuración de DVWA",
    descripcion: "Preparación del laboratorio para realizar las pruebas."
  },
  {
    icon: <FaDatabase />,
    titulo: "SQL Injection",
    descripcion: "Validación de la vulnerabilidad y análisis del impacto."
  },
  {
    icon: <FaCode />,
    titulo: "Reflected XSS",
    descripcion: "Comprobación de la ejecución de código JavaScript."
  },
  {
    icon: <FaTerminal />,
    titulo: "Command Injection",
    descripcion: "Ejecución de comandos del sistema operativo."
  },
  {
    icon: <FaChartBar />,
    titulo: "Evaluación CVSS",
    descripcion: "Clasificación de la severidad de cada vulnerabilidad."
  },
  {
    icon: <FaBoxes />,
    titulo: "Activos Críticos",
    descripcion: "Identificación de los activos afectados."
  },
  {
    icon: <FaShieldAlt />,
    titulo: "Matriz de Riesgos",
    descripcion: "Priorización de riesgos según probabilidad e impacto."
  },
  {
    icon: <FaTools />,
    titulo: "Controles y Recuperación",
    descripcion: "Definición de medidas preventivas y plan de recuperación."
  },
  {
    icon: <FaCheckCircle />,
    titulo: "Auditoría Finalizada",
    descripcion: "Consolidación del informe y recomendaciones finales."
  }
];

function Timeline() {
  return (
    <section id="timeline" className="card">

      <h2>Línea de Tiempo de la Auditoría</h2>

      <p>
        El siguiente esquema resume las principales etapas desarrolladas
        durante la auditoría de seguridad realizada al portal de la
        Municipalidad de Cerro Verde.
      </p>

      <div className="timeline">

        {eventos.map((evento, index) => (

          <div className="timeline-item" key={index}>

            <div className="timeline-marker">

              <div className="timeline-circle">

                {evento.icon}

              </div>

              {index !== eventos.length - 1 && (

                <div className="timeline-line"></div>

              )}

            </div>

            <div className="timeline-content">

              <h3>{evento.titulo}</h3>

              <p>{evento.descripcion}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Timeline;