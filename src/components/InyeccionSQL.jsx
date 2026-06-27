function InyeccionSQL() {
  return (
    <section id="sqli" className="card">

      <h2>SQL Injection</h2>

      <h3>¿Qué es SQL Injection?</h3>

      <p>
        SQL Injection es una vulnerabilidad web que ocurre cuando una
        aplicación incorpora directamente los datos ingresados por el usuario
        dentro de una consulta SQL sin validarlos correctamente.
      </p>

      <p>
        Cuando esto sucede, un atacante puede modificar la consulta original
        mediante instrucciones SQL propias, obteniendo acceso a información
        que normalmente no debería visualizar. Dependiendo del sistema
        afectado, también podría modificar, eliminar o insertar registros
        dentro de la base de datos.
      </p>

      <p>
        En un portal como el de la Municipalidad de Cerro Verde, una
        vulnerabilidad de este tipo podría comprometer información de
        ciudadanos, funcionarios municipales y registros administrativos,
        afectando la seguridad y confiabilidad del servicio.
      </p>

      <h3>Evidencia</h3>

      <p>
        La prueba fue realizada utilizando DVWA configurado con el nivel de
        seguridad <strong>Low</strong>.
      </p>

      <p>
        Para comprobar la vulnerabilidad se utilizó el siguiente payload:
      </p>

      <pre>
        <code>
1' OR '1'='1
        </code>
      </pre>

      <p>
        Al ejecutar la consulta, la aplicación devolvió todos los registros
        almacenados en la base de datos en lugar de mostrar únicamente el
        usuario solicitado.
      </p>

      <div className="evidencias">

        <figure>

          <img
            src="/img_beieti/sqli_beieti.png"
            alt="SQL Injection"
            className="evidencia"
          />

          <figcaption>

            Figura 1. Ejecución exitosa de SQL Injection utilizando el payload
            <strong> 1' OR '1'='1</strong>. La aplicación devolvió todos los
            registros almacenados en la base de datos.

          </figcaption>

        </figure>

        <figure>

          <img
            src="/img_beieti/sqliCal_beieti.png"
            alt="CVSS SQL Injection"
            className="evidencia"
          />

          <figcaption>

            Figura 2. Resultado obtenido utilizando la calculadora oficial
            CVSS v3.1.

          </figcaption>

        </figure>

      </div>

      <h3>¿Por qué ocurre?</h3>

      <p>
        Esta vulnerabilidad ocurre porque la aplicación utiliza directamente
        la información ingresada por el usuario para construir la consulta
        SQL, sin validar ni separar correctamente los datos del código de la
        consulta.
      </p>

      <p>
        Debido a esto, el motor de base de datos interpreta el payload
        enviado como si fuera parte de la instrucción SQL original,
        permitiendo alterar completamente la lógica de la consulta.
      </p>

      <h3>Evaluación CVSS v3.1</h3>

      <div className="cvss-box">

        <h4>7.1 / 10</h4>

        <p className="alta">
          Severidad Alta
        </p>

        <p>

          <strong>Vector</strong>

          <br />

          CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:L/A:N

        </p>

      </div>

      <h3>¿Qué significa este puntaje?</h3>

      <p>
        El resultado obtenido corresponde a una vulnerabilidad de severidad
        alta, ya que puede explotarse de forma remota, requiere poca
        complejidad técnica y no necesita la participación de otros usuarios.
      </p>

      <p>
        Si una vulnerabilidad como esta existiera en el portal de la
        Municipalidad de Cerro Verde, un atacante podría acceder a
        información personal de ciudadanos, antecedentes de funcionarios
        municipales y distintos registros administrativos.
      </p>

      <h3>Políticas de prevención</h3>

      <ul>

        <li>Utilizar consultas parametrizadas (Prepared Statements).</li>

        <li>Validar todos los datos recibidos por la aplicación.</li>

        <li>Sanitizar la información ingresada por los usuarios.</li>

        <li>Evitar construir consultas SQL mediante concatenación de texto.</li>

        <li>Realizar revisiones de código durante el desarrollo.</li>

        <li>Capacitar a los desarrolladores en programación segura.</li>

      </ul>

      <h3>Controles de mitigación</h3>

      <ul>

        <li>Implementar un Web Application Firewall (WAF).</li>

        <li>Registrar y monitorear intentos de acceso mediante logs.</li>

        <li>Aplicar el principio de mínimo privilegio en la base de datos.</li>

        <li>Implementar monitoreo continuo y generación de alertas.</li>

        <li>Realizar auditorías periódicas utilizando OWASP Top 10.</li>

        <li>Aplicar controles recomendados por OWASP, NIST y CIS Controls.</li>

      </ul>

    </section>
  );
}

export default InyeccionSQL;