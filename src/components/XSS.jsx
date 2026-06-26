function XSS() {
  return (
    <section id="xss" className="card">

      <h2>Cross Site Scripting (XSS)</h2>

      <h3>Descripción</h3>

      <p>
        Cross Site Scripting (XSS) es una vulnerabilidad que permite a un
        atacante inyectar código JavaScript malicioso dentro de una página
        web. Cuando otro usuario visita esa página, el navegador ejecuta el
        código como si perteneciera al sitio legítimo.
      </p>

      <h3>Payload utilizado</h3>

      <pre>
        <code>{`<script>alert('XSS')</script>`}</code>
      </pre>

      <h3>Resultado esperado</h3>

      <p>
        El navegador ejecuta el código JavaScript y muestra una ventana
        emergente (alert), demostrando que la aplicación interpreta el
        contenido ingresado como código ejecutable.
      </p>

      <p>
        <strong>Captura pendiente.</strong>
      </p>

      <h3>¿Por qué funciona?</h3>

      <p>
        La aplicación devuelve al navegador la información ingresada por el
        usuario sin validarla ni sanitizarla. Como resultado, el navegador
        interpreta la etiqueta {"<script>"} como código JavaScript y la
        ejecuta automáticamente.
      </p>

      <h3>Impacto para la Municipalidad</h3>

      <ul>
        <li>Robo de sesiones de ciudadanos.</li>
        <li>Suplantación de identidad.</li>
        <li>Redirección a sitios fraudulentos.</li>
        <li>Captura de credenciales.</li>
        <li>Manipulación del contenido del portal.</li>
      </ul>

      <h3>CVSS</h3>

<p className="cvss">

<strong>CVSS:</strong>{" "}

<span className="media">

6.1 / 10 — Media

</span>

</p>

      <h3>Medidas de prevención</h3>

      <ul>
        <li>Sanitizar todas las entradas.</li>
        <li>Escapar caracteres HTML.</li>
        <li>Implementar Content Security Policy (CSP).</li>
        <li>Utilizar cookies HttpOnly y Secure.</li>
        <li>Realizar pruebas periódicas de seguridad.</li>
      </ul>

    </section>
  );
}

export default XSS;