function InyeccionSQL() {
  return (
    <section id="sqli" className="card">

      <h2>SQL Injection</h2>

      <h3>Descripción</h3>

      <p>
        La vulnerabilidad SQL Injection permite manipular consultas SQL
        enviadas a la base de datos cuando la aplicación no valida
        correctamente la información ingresada por el usuario.
      </p>

      <h3>Payload utilizado</h3>

      <pre>
        <code>' OR '1'='1</code>
      </pre>

      <h3>Resultado esperado</h3>

      <p>
        La aplicación devuelve todos los registros almacenados en la base
        de datos.

        <br /><br />

        <strong>Captura pendiente.</strong>
      </p>

      <h3>¿Por qué funciona?</h3>

      <p>
        La consulta SQL concatena directamente la entrada del usuario.
        Al agregar una condición siempre verdadera, el filtro deja de
        funcionar y la base de datos devuelve todos los registros.
      </p>

      <h3>Impacto para la Municipalidad</h3>

      <ul>
        <li>Exposición de datos de ciudadanos.</li>
        <li>Acceso a información de funcionarios.</li>
        <li>Filtración de permisos municipales.</li>
        <li>Compromiso de registros administrativos.</li>
      </ul>

      <h3>CVSS</h3>

<p className="cvss">

<strong>CVSS:</strong>{" "}

<span className="critica">

9.1 / 10 — Crítica

</span>

</p>

      <h3>Medidas de prevención</h3>

      <ul>
        <li>Consultas parametrizadas.</li>
        <li>Validación de entradas.</li>
        <li>Mínimo privilegio para la base de datos.</li>
        <li>Monitoreo de actividades sospechosas.</li>
      </ul>

    </section>
  );
}

export default InyeccionSQL;