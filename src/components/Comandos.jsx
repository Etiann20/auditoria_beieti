function Comandos() {
  return (
    <section id="comandos" className="card">

      <h2>Command Injection</h2>

      <h3>Descripción</h3>

      <p>
        La vulnerabilidad Command Injection permite ejecutar comandos del
        sistema operativo utilizando datos ingresados por el usuario cuando
        la aplicación no realiza una validación adecuada.
      </p>

      <h3>Payload utilizado</h3>

      <pre>
        <code>127.0.0.1; cat /etc/passwd</code>
      </pre>

      <h3>Resultado esperado</h3>

      <p>
        El servidor ejecuta el comando ping y posteriormente muestra el
        contenido del archivo <code>/etc/passwd</code>, demostrando que es
        posible ejecutar comandos arbitrarios.
      </p>

      <p>
        <strong>Captura pendiente.</strong>
      </p>

      <h3>¿Por qué funciona?</h3>

      <p>
        La aplicación incorpora directamente la entrada del usuario dentro
        de un comando del sistema operativo. El carácter ";" permite
        ejecutar un segundo comando, lo que posibilita acceder a archivos
        internos o ejecutar instrucciones no autorizadas.
      </p>

      <h3>Impacto para la Municipalidad</h3>

      <ul>
        <li>Acceso a archivos internos.</li>
        <li>Compromiso del servidor.</li>
        <li>Interrupción de servicios municipales.</li>
        <li>Instalación de software malicioso.</li>
        <li>Acceso no autorizado a información institucional.</li>
      </ul>

      <h3>CVSS</h3>

<p className="cvss">

<strong>CVSS:</strong>{" "}

<span className="critica">

9.8 / 10 — Crítica

</span>

</p>

      <h3>Medidas de prevención</h3>

      <ul>
        <li>No ejecutar comandos utilizando entradas del usuario.</li>
        <li>Validar estrictamente los datos recibidos.</li>
        <li>Utilizar listas blancas (Whitelists).</li>
        <li>Aplicar el principio de mínimo privilegio.</li>
        <li>Monitorear continuamente la actividad del servidor.</li>
      </ul>

    </section>
  );
}

export default Comandos;