function Comandos() {
  return (
    <section id="comandos" className="card">

      <h2>Command Injection</h2>

      <h3>¿Qué es Command Injection?</h3>

      <p>
        Command Injection es una vulnerabilidad que ocurre cuando una
        aplicación ejecuta comandos del sistema operativo utilizando
        información ingresada por el usuario sin realizar una validación
        adecuada.
      </p>

      <p>
        Si un atacante logra explotar esta vulnerabilidad, puede ejecutar
        comandos directamente sobre el servidor, acceder a archivos internos,
        modificar información o incluso comprometer completamente el sistema
        operativo.
      </p>

      <p>
        En un portal como el de la Municipalidad de Cerro Verde, una
        vulnerabilidad de este tipo representa un riesgo crítico, ya que
        podría afectar tanto la información almacenada como la disponibilidad
        de los servicios municipales.
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
127.0.0.1; cat /etc/passwd
        </code>
      </pre>

      <p>
        Al ejecutar la prueba, la aplicación realizó el comando ping y luego
        ejecutó el comando <strong>cat /etc/passwd</strong>, mostrando el
        contenido del archivo directamente en la página.
      </p>

      <div className="evidencias">

        <figure>

          <img
            src="/img_beieti/comandos_beieti.png"
            alt="Command Injection"
            className="evidencia"
          />

          <figcaption>

            Figura 1. Ejecución exitosa de Command Injection utilizando el
            payload <strong>127.0.0.1; cat /etc/passwd</strong>. Como
            resultado fue posible visualizar el contenido del archivo
            <strong> /etc/passwd</strong>.

          </figcaption>

        </figure>

        <figure>

          <img
            src="/img_beieti/comandosCal_beieti.png"
            alt="CVSS Command Injection"
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
        la información ingresada por el usuario para construir comandos del
        sistema operativo sin realizar una validación adecuada.
      </p>

      <p>
        Como consecuencia, el sistema interpreta el payload enviado como un
        comando válido y lo ejecuta con los permisos de la aplicación.
      </p>

      <p>
        En este caso, el operador <strong>;</strong> permitió ejecutar un
        segundo comando independiente, obteniendo acceso al contenido del
        archivo <strong>/etc/passwd</strong>.
      </p>

      <h3>Evaluación CVSS v3.1</h3>

      <div className="cvss-box">

        <h4>10.0 / 10</h4>

        <p className="critica">
          Severidad Crítica
        </p>

        <p>

          <strong>Vector</strong>

          <br />

          CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H

        </p>

      </div>

      <h3>¿Qué significa este puntaje?</h3>

      <p>
        La vulnerabilidad presenta una severidad crítica, ya que permite
        ejecutar comandos directamente sobre el servidor sin requerir
        autenticación ni interacción de otros usuarios.
      </p>

      <p>
        En un escenario real, un atacante podría comprometer completamente
        el servidor de la Municipalidad de Cerro Verde, acceder a archivos
        internos, modificar información crítica e incluso interrumpir los
        servicios digitales entregados a la comunidad.
      </p>

      <h3>Políticas de prevención</h3>

      <ul>

        <li>Validar estrictamente todas las entradas recibidas.</li>

        <li>Utilizar listas blancas (Whitelist).</li>

        <li>Evitar ejecutar comandos utilizando datos del usuario.</li>

        <li>Utilizar funciones seguras del lenguaje de programación.</li>

        <li>Capacitar a los desarrolladores en programación segura.</li>

      </ul>

      <h3>Controles de mitigación</h3>

      <ul>

        <li>Aplicar el principio de mínimo privilegio.</li>

        <li>Implementar un Web Application Firewall (WAF).</li>

        <li>Registrar y monitorear comandos sospechosos mediante logs.</li>

        <li>Implementar monitoreo continuo de eventos de seguridad.</li>

        <li>Realizar auditorías periódicas utilizando OWASP Top 10.</li>

        <li>Aplicar controles definidos por OWASP, NIST y CIS Controls.</li>

      </ul>

      <h3>Comparación de Severidad (CVSS v3.1)</h3>

<p>
  Luego de evaluar las tres vulnerabilidades identificadas durante la
  auditoría, se compararon los puntajes obtenidos mediante la
  metodología CVSS v3.1 para determinar cuáles representan un mayor
  riesgo para el portal de la Municipalidad de Cerro Verde.
</p>

<table className="tabla-cvss">

  <thead>

    <tr>

      <th>Vulnerabilidad</th>

      <th>Puntaje</th>

      <th>Severidad</th>

    </tr>

  </thead>

  <tbody>

    <tr>

      <td>SQL Injection</td>

      <td>7.1</td>

      <td className="alta">
        Alta
      </td>

    </tr>

    <tr>

      <td>Reflected XSS</td>

      <td>6.1</td>

      <td className="media">
        Media
      </td>

    </tr>

    <tr>

      <td>Command Injection</td>

      <td>10.0</td>

      <td className="critica">
        Crítica
      </td>

    </tr>

  </tbody>

</table>

<h3>Análisis</h3>

<p>
  La comparación de los resultados demuestra que
  <strong> Command Injection </strong>
  representa la vulnerabilidad más crítica encontrada durante la
  auditoría, debido a que permite ejecutar comandos directamente sobre
  el servidor y comprometer completamente el sistema.
</p>

<p>
  Por otra parte,
  <strong> SQL Injection </strong>
  presenta un riesgo alto al permitir acceder a información almacenada
  en la base de datos municipal, mientras que
  <strong> Reflected XSS </strong>
  obtuvo una severidad media, ya que requiere la interacción del
  usuario para que el ataque tenga efecto.
</p>

<p>
  Esta comparación permitió establecer la prioridad para implementar
  controles de seguridad, comenzando por Command Injection, seguido de
  SQL Injection y finalmente Reflected XSS.
</p>

    </section>
  );
}

export default Comandos;