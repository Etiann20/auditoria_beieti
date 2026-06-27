function Activos() {
  return (
    <section id="activos" className="card">

      <h2>Activos y Riesgos según la Industria</h2>

      <h3>Introducción</h3>

      <p>
        Antes de definir las medidas de seguridad, primero es necesario
        identificar los activos de información más importantes del portal de
        la Municipalidad de Cerro Verde.
      </p>

      <p>
        Estos activos permiten que el portal funcione correctamente y
        almacenan información relevante para la municipalidad y los
        ciudadanos. Si alguno de ellos se ve comprometido por una
        vulnerabilidad, podría afectar la continuidad de los servicios y la
        seguridad de la información.
      </p>

      <h3>Activos identificados</h3>

      <table className="tabla-cvss">

        <thead>

          <tr>

            <th>Activo</th>

            <th>Clasificación</th>

            <th>Justificación</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Base de datos municipal</td>

            <td>Información</td>

            <td>
              Almacena información de ciudadanos, funcionarios,
              permisos y registros municipales.
            </td>

          </tr>

          <tr>

            <td>Portal web municipal</td>

            <td>Servicio</td>

            <td>
              Permite a los ciudadanos acceder a trámites y servicios
              digitales.
            </td>

          </tr>

          <tr>

            <td>Servidor de aplicaciones</td>

            <td>Infraestructura</td>

            <td>
              Ejecuta el portal web y procesa las solicitudes realizadas
              por los usuarios.
            </td>

          </tr>

          <tr>

            <td>Cuentas de funcionarios</td>

            <td>Credenciales</td>

            <td>
              Permiten administrar el portal y acceder a funciones
              internas del sistema.
            </td>

          </tr>

        </tbody>

      </table>

      <h3>Relación entre vulnerabilidades y activos</h3>

      <p>
        Cada vulnerabilidad identificada durante la auditoría afecta uno o
        más activos importantes del portal municipal.
      </p>

      <table className="tabla-cvss">

        <thead>

          <tr>

            <th>Vulnerabilidad</th>

            <th>Activos afectados</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>SQL Injection</td>

            <td>
              Base de datos municipal y Portal web municipal.
            </td>

          </tr>

          <tr>

            <td>Reflected XSS</td>

            <td>
              Portal web municipal y Cuentas de funcionarios.
            </td>

          </tr>

          <tr>

            <td>Command Injection</td>

            <td>
              Servidor de aplicaciones, Base de datos municipal y
              Portal web municipal.
            </td>

          </tr>

        </tbody>

      </table>

      <h3>Justificación</h3>

      <p>
        La vulnerabilidad <strong>SQL Injection</strong> pone en riesgo
        principalmente la base de datos, ya que permite acceder a
        información almacenada sin autorización.
      </p>

      <p>
        Por otra parte, <strong>Reflected XSS</strong> afecta el portal web
        y las cuentas de funcionarios, debido a que permite ejecutar código
        malicioso en el navegador de los usuarios.
      </p>

      <p>
        Finalmente, <strong>Command Injection</strong> representa el mayor
        riesgo, ya que compromete directamente el servidor donde se ejecuta
        la aplicación y puede afectar también la base de datos y el
        funcionamiento del portal.
      </p>

      <h3>Conclusión</h3>

      <p>
        La identificación de estos activos permitió establecer cuáles son
        los elementos más importantes que deben protegerse dentro del portal
        de la Municipalidad de Cerro Verde.
      </p>

      <p>
        Además, esta clasificación servirá como base para construir la
        matriz de riesgos y definir posteriormente las medidas de
        prevención, mitigación y recuperación propuestas durante la
        auditoría.
      </p>

    </section>
  );
}

export default Activos;