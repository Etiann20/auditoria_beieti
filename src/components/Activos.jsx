import {
    FaDatabase,
    FaServer,
    FaGlobe,
    FaUsers,
    FaNetworkWired,
    FaMoneyCheckAlt
  } from "react-icons/fa";
  
  function Activos() {
    return (
      <section id="activos" className="card">
  
        <h2>Activos de Información</h2>
  
        <p>
          Los siguientes activos fueron identificados como críticos para el
          funcionamiento del portal de la Municipalidad de Cerro Verde.
        </p>
  
        <div className="activos-grid">
  
          <div className="activo-card">
            <FaDatabase />
            <h3>Base de Datos</h3>
            <p>Información de ciudadanos y funcionarios.</p>
            <span className="critica">Criticidad Alta</span>
          </div>
  
          <div className="activo-card">
            <FaServer />
            <h3>Servidor Web</h3>
            <p>Infraestructura donde se aloja el portal municipal.</p>
            <span className="critica">Criticidad Alta</span>
          </div>
  
          <div className="activo-card">
            <FaGlobe />
            <h3>Portal Web</h3>
            <p>Principal medio de atención digital a los ciudadanos.</p>
            <span className="critica">Criticidad Alta</span>
          </div>
  
          <div className="activo-card">
            <FaUsers />
            <h3>Usuarios</h3>
            <p>Ciudadanos y funcionarios autenticados.</p>
            <span className="media">Criticidad Media</span>
          </div>
  
          <div className="activo-card">
            <FaNetworkWired />
            <h3>Red Municipal</h3>
            <p>Comunicación entre los distintos servicios internos.</p>
            <span className="critica">Criticidad Alta</span>
          </div>
  
          <div className="activo-card">
            <FaMoneyCheckAlt />
            <h3>Sistema de Pagos</h3>
            <p>Pago de derechos y servicios municipales.</p>
            <span className="critica">Criticidad Alta</span>
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default Activos;