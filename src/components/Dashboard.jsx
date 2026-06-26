import {
    FaBug,
    FaExclamationTriangle,
    FaShieldAlt,
    FaUniversity
  } from "react-icons/fa";
  
  function Dashboard() {
    return (
      <section className="dashboard">
  
        <div className="stat-card">
          <FaBug />
          <h2>3</h2>
          <p>Vulnerabilidades</p>
        </div>
  
        <div className="stat-card">
          <FaExclamationTriangle />
          <h2>2</h2>
          <p>Críticas</p>
        </div>
  
        <div className="stat-card">
          <FaShieldAlt />
          <h2>1</h2>
          <p>Media</p>
        </div>
  
        <div className="stat-card">
          <FaUniversity />
          <h2>Municipalidad</h2>
          <p>Cerro Verde</p>
        </div>
  
      </section>
    );
  }
  
  export default Dashboard;