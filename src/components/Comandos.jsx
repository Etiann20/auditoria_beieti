function Comandos() {
  return (
    <section id="comandos" className="card">

      <h2>Command Injection</h2>

      <p>
        Command Injection es una vulnerabilidad que permite ejecutar comandos
        del sistema operativo cuando la aplicación utiliza directamente la
        información ingresada por el usuario sin realizar una validación
        adecuada.
      </p>

      <p>
        Durante la auditoría realizada se comprobó que era posible ejecutar
        comandos sobre el servidor, obteniendo acceso al contenido de archivos
        internos del sistema operativo.
      </p>

      <h3>Evidencia del laboratorio</h3>

      <div className="evidencias">

        <figure>

          <img
            src="/img_beieti/comandos_beieti.png"
            alt="Command Injection"
            className="evidencia"
          />

          <figcaption>

            Figura 1. Ejecución exitosa de Command Injection utilizando el
            payload <strong>127.0.0.1; cat /etc/passwd</strong>, permitiendo
            acceder al contenido del archivo <strong>/etc/passwd</strong>.

          </figcaption>

        </figure>

        <figure>

          <img
            src="/img_beieti/comandosCal_beieti.png"
            alt="CVSS Command Injection"
            className="evidencia"
          />

          <figcaption>

            Figura 2. Resultado obtenido mediante la calculadora oficial
            CVSS v3.1.

          </figcaption>

        </figure>

      </div>

      <h3>Evaluación CVSS v3.1</h3>

      <div className="cvss-box">

        <h4>10.0 / 10</h4>

        <p className="critica">
          Severidad Crítica
        </p>

        <p>
          <strong>Vector:</strong><br />
          CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H
        </p>

      </div>

      <h3>¿Qué significa este puntaje?</h3>

      <p>
        El puntaje obtenido indica que la vulnerabilidad representa un riesgo
        crítico. Durante la prueba fue posible ejecutar comandos directamente
        sobre el servidor y acceder al contenido del archivo
        <strong> /etc/passwd</strong>, demostrando un compromiso importante del
        sistema.
      </p>

      <h3>Contexto Municipalidad de Cerro Verde</h3>

      <p>
        En un portal municipal esta vulnerabilidad podría permitir el acceso
        a información crítica, la modificación de archivos del sistema y la
        interrupción de los servicios digitales utilizados por ciudadanos y
        funcionarios.
      </p>

      <h3>Impacto</h3>

      <ul>

        <li>Acceso a archivos internos del servidor.</li>

        <li>Compromiso total del sistema operativo.</li>

        <li>Robo de información confidencial.</li>

        <li>Interrupción de los servicios municipales.</li>

        <li>Instalación de software malicioso.</li>

      </ul>

      <h3>Medidas de mitigación</h3>

      <ul>

        <li>Evitar ejecutar comandos utilizando datos del usuario.</li>

        <li>Validar entradas mediante listas blancas.</li>

        <li>Aplicar el principio de mínimo privilegio.</li>

        <li>Aislar la aplicación del sistema operativo.</li>

        <li>Monitorear intentos de ejecución de comandos.</li>

        <li>Realizar auditorías periódicas siguiendo OWASP Top 10.</li>

      </ul>

    </section>
  );
}

export default Comandos;