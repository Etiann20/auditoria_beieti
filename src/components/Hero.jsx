import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Auditoría de Seguridad Web
        </h1>

        <h2>
          Municipalidad de Cerro Verde
        </h2>

        <p>
          Análisis de vulnerabilidades utilizando DVWA,
          evaluación mediante CVSS v3.1 y recomendaciones
          basadas en OWASP Top 10.
        </p>

        <a href="#dashboard" className="hero-btn">
          Ver Informe
        </a>

        <div className="hero-badges">

          <div className="badge">

            <span>🛡️</span>

            <strong>3</strong>

            <p>Vulnerabilidades</p>

          </div>

          <div className="badge">

            <span>📊</span>

            <strong>10.0</strong>

            <p>CVSS Máximo</p>

          </div>

          <div className="badge">

            <span>🖥️</span>

            <strong>4</strong>

            <p>Activos Críticos</p>

          </div>

          <div className="badge">

            <span>⚠️</span>

            <strong>Alto</strong>

            <p>Riesgo General</p>

          </div>

        </div>

      </div>

      <div className="hero-image">

        <img
          src={hero}
          alt="Auditoría de Seguridad"
        />

      </div>

    </section>
  );
}

export default Hero;