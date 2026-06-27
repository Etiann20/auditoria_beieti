function InyeccionSQL() {
  return (
    <section id="sqli" className="card">

      <h2>SQL Injection</h2>

      <p>
        SQL Injection es una vulnerabilidad que ocurre cuando una aplicación
        utiliza directamente los datos ingresados por el usuario para construir
        consultas SQL sin validar correctamente la información recibida.
      </p>

      <p>
        Durante la auditoría se comprobó que era posible alterar el
        comportamiento de la consulta SQL utilizando un payload sencillo,
        obteniendo información que normalmente no debería ser accesible.
      </p>

      <h3>Evidencia del laboratorio</h3>

      <div className="evidencias">

        <figure>

          <img
            src="/img_beieti/sqli_beieti.png"
            alt="SQL Injection"
            className="evidencia"
          />

          <figcaption>

            Figura 1. Ejecución exitosa de SQL Injection utilizando el payload
            <strong> 1' OR '1'='1</strong>. Como resultado, la aplicación
            devolvió todos los registros almacenados en la base de datos.

          </figcaption>

        </figure>

        <figure>

          <img
            src="/img_beieti/sqliCal_beieti.png"
            alt="CVSS SQL Injection"
            className="evidencia"
          />

          <figcaption>

            Figura 2. Resultado obtenido mediante la calculadora oficial
            CVSS v3.1.

          </figcaption>

        </figure>

      </div>

      <h3>Resultado obtenido</h3>

      <p>
        Se utilizó el payload <strong>1' OR '1'='1</strong>, logrando que la
        aplicación devolviera todos los registros de la base de datos. Esto
        confirmó que la entrada del usuario era interpretada directamente dentro
        de la consulta SQL, permitiendo modificar su funcionamiento.
      </p>

      <h3>Evaluación CVSS v3.1</h3>

      <div className="cvss-box">

        <h4>7.1 / 10</h4>

        <p className="alta">
          Severidad Alta
        </p>

        <p>
          <strong>Vector:</strong><br />
          CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:L/A:N
        </p>

      </div>

      <h3>¿Qué significa este puntaje?</h3>

      <p>
        El puntaje obtenido indica que la vulnerabilidad representa un riesgo
        alto para la aplicación. Puede ser explotada de forma remota y permite
        acceder a información sensible sin requerir técnicas complejas.
      </p>

      <h3>Contexto Municipalidad de Cerro Verde</h3>

      <p>
        Si esta vulnerabilidad estuviera presente en el portal municipal,
        un atacante podría acceder a información personal de ciudadanos,
        antecedentes de funcionarios o registros administrativos, afectando
        principalmente la confidencialidad de la información.
      </p>

      <h3>Impacto</h3>

      <ul>

        <li>Acceso no autorizado a datos personales.</li>

        <li>Exposición de información de funcionarios.</li>

        <li>Posible modificación de registros municipales.</li>

        <li>Pérdida de confianza en los servicios digitales.</li>

        <li>Riesgo de incumplimiento de buenas prácticas de seguridad.</li>

      </ul>

      <h3>Medidas de mitigación</h3>

      <ul>

        <li>Implementar consultas parametrizadas (Prepared Statements).</li>

        <li>Validar y sanitizar todas las entradas del usuario.</li>

        <li>Aplicar el principio de mínimo privilegio.</li>

        <li>Implementar un Web Application Firewall (WAF).</li>

        <li>Monitorear intentos de acceso sospechosos.</li>

        <li>Realizar auditorías periódicas basadas en OWASP Top 10.</li>

      </ul>

    </section>
  );
}

export default InyeccionSQL;