function XSS() {
  return (
    <section id="xss" className="card">

      <h2>Reflected XSS</h2>

      <h3>¿Qué es Reflected XSS?</h3>

      <p>
        Reflected Cross Site Scripting (XSS) es una vulnerabilidad que ocurre
        cuando una aplicación devuelve información ingresada por el usuario
        sin validarla ni codificarla correctamente antes de mostrarla en el
        navegador.
      </p>

      <p>
        Cuando esto sucede, un atacante puede inyectar código JavaScript que
        será ejecutado por el navegador de la víctima, permitiendo mostrar
        contenido falso, robar información de sesión o redirigir al usuario
        hacia sitios maliciosos.
      </p>

      <p>
        En un portal como el de la Municipalidad de Cerro Verde, una
        vulnerabilidad de este tipo podría afectar tanto a ciudadanos como a
        funcionarios municipales que utilicen el sistema.
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
{"<script>alert('XSS')</script>"}
        </code>
      </pre>

      <p>
        Después de enviar el payload, la aplicación devolvió el mismo
        contenido sin validarlo, ejecutando el código JavaScript
        directamente en el navegador.
      </p>

      <div className="evidencias">

        <figure>

          <img
            src="/img_beieti/xss1_beieti.png"
            alt="Payload XSS"
            className="evidencia"
          />

          <figcaption>

            Figura 1. Payload utilizado durante la prueba.

          </figcaption>

        </figure>

        <figure>

          <img
            src="/img_beieti/xss2_beieti.png"
            alt="Resultado XSS"
            className="evidencia"
          />

          <figcaption>

            Figura 2. Resultado obtenido al ejecutar el código JavaScript.

          </figcaption>

        </figure>

        <figure>

          <img
            src="/img_beieti/xssCal_beieti.png"
            alt="CVSS XSS"
            className="evidencia"
          />

          <figcaption>

            Figura 3. Resultado obtenido utilizando la calculadora oficial
            CVSS v3.1.

          </figcaption>

        </figure>

      </div>

      <h3>¿Por qué ocurre?</h3>

      <p>
        Esta vulnerabilidad ocurre porque la aplicación devuelve
        directamente la información enviada por el usuario sin validarla ni
        aplicar mecanismos de codificación (Output Encoding).
      </p>

      <p>
        Como consecuencia, el navegador interpreta el contenido recibido
        como código JavaScript válido y lo ejecuta automáticamente.
      </p>

      <h3>Evaluación CVSS v3.1</h3>

      <div className="cvss-box">

        <h4>6.1 / 10</h4>

        <p className="media">
          Severidad Media
        </p>

        <p>

          <strong>Vector</strong>

          <br />

          CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N

        </p>

      </div>

      <h3>¿Qué significa este puntaje?</h3>

      <p>
        La vulnerabilidad presenta una severidad media, ya que requiere la
        interacción de un usuario para que el ataque tenga efecto.
      </p>

      <p>
        En un escenario real, un atacante podría utilizar esta
        vulnerabilidad para engañar a ciudadanos o funcionarios
        municipales, robar información de sesión o mostrar contenido falso
        dentro del portal municipal.
      </p>

      <h3>Políticas de prevención</h3>

      <ul>

        <li>Validar todas las entradas recibidas desde el usuario.</li>

        <li>Aplicar Output Encoding antes de mostrar información.</li>

        <li>Implementar Content Security Policy (CSP).</li>

        <li>Evitar insertar directamente contenido HTML del usuario.</li>

        <li>Capacitar a los desarrolladores en desarrollo seguro.</li>

      </ul>

      <h3>Controles de mitigación</h3>

      <ul>

        <li>Configurar cookies HttpOnly y Secure.</li>

        <li>Implementar un Web Application Firewall (WAF).</li>

        <li>Registrar y monitorear actividades sospechosas mediante logs.</li>

        <li>Implementar monitoreo continuo de eventos de seguridad.</li>

        <li>Realizar auditorías periódicas siguiendo OWASP Top 10.</li>

        <li>Aplicar controles definidos por OWASP, NIST y CIS Controls.</li>

      </ul>

    </section>
  );
}

export default XSS;