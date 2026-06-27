function XSS() {
  return (
    <section id="xss" className="card">

      <h2>Cross Site Scripting (Reflected XSS)</h2>

      <p>
        Cross Site Scripting (XSS) es una vulnerabilidad que permite ejecutar
        código JavaScript dentro del navegador de otro usuario cuando la
        aplicación no valida correctamente la información ingresada.
      </p>

      <p>
        Durante la auditoría realizada se comprobó que era posible ejecutar
        código JavaScript utilizando un payload sencillo, demostrando que la
        aplicación era vulnerable a Reflected XSS.
      </p>

      <h3>Evidencia del laboratorio</h3>

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
            Figura 2. Resultado obtenido después de ejecutar el ataque.
          </figcaption>
        </figure>

        <figure>
          <img
            src="/img_beieti/xssCal_beieti.png"
            alt="CVSS XSS"
            className="evidencia"
          />
          <figcaption>
            Figura 3. Resultado del cálculo CVSS v3.1.
          </figcaption>
        </figure>

      </div>

      <h3>Evaluación CVSS v3.1</h3>

      <div className="cvss-box">

        <h4>6.1 / 10</h4>

        <p className="media">
          Severidad Media
        </p>

        <p>
          <strong>Vector:</strong><br/>
          CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N
        </p>

      </div>

      <h3>¿Qué significa este puntaje?</h3>

      <p>
        El resultado indica que la vulnerabilidad presenta un riesgo medio.
        Aunque requiere que la víctima interactúe con el contenido malicioso,
        permite ejecutar código JavaScript dentro del navegador del usuario.
      </p>

      <h3>Contexto Municipalidad de Cerro Verde</h3>

      <p>
        En un portal municipal esta vulnerabilidad podría utilizarse para
        robar sesiones de usuarios, modificar el contenido de la página o
        capturar información ingresada por ciudadanos y funcionarios.
      </p>

      <h3>Impacto</h3>

      <ul>

        <li>Robo de cookies de sesión.</li>

        <li>Suplantación de identidad.</li>

        <li>Captura de información de formularios.</li>

        <li>Modificación del contenido mostrado.</li>

        <li>Pérdida de confianza en el portal municipal.</li>

      </ul>

      <h3>Medidas de mitigación</h3>

      <ul>

        <li>Validar y sanitizar las entradas del usuario.</li>

        <li>Codificar correctamente la salida de datos.</li>

        <li>Implementar Content Security Policy (CSP).</li>

        <li>Utilizar cookies HttpOnly y Secure.</li>

        <li>Realizar auditorías periódicas siguiendo OWASP Top 10.</li>

      </ul>

    </section>
  );
}

export default XSS;