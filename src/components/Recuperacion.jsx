function Recuperacion() {
  return (
    <section id="recuperacion" className="card">

      <h2>Mejoras Tecnológicas y Plan de Recuperación ante Desastres</h2>

      <h3>Introducción</h3>

      <p>
        Además de implementar medidas para prevenir y mitigar
        vulnerabilidades, es importante contar con un plan que permita
        recuperar el funcionamiento del portal en caso de producirse un
        incidente de seguridad.
      </p>

      <p>
        El objetivo de este plan es disminuir el impacto sobre los
        servicios digitales de la Municipalidad de Cerro Verde y permitir
        una recuperación rápida frente a posibles ataques.
      </p>

      <h3>Mejoras tecnológicas</h3>

      <table className="tabla-cvss">

        <thead>

          <tr>

            <th>Mejora</th>

            <th>Objetivo</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Implementar un Web Application Firewall (WAF).</td>

            <td>
              Detectar y bloquear ataques dirigidos contra la aplicación
              web.
            </td>

          </tr>

          <tr>

            <td>Segmentar la red del servidor.</td>

            <td>
              Evitar que un incidente afecte otros servicios internos de
              la municipalidad.
            </td>

          </tr>

          <tr>

            <td>Implementar autenticación multifactor (MFA).</td>

            <td>
              Proteger las cuentas administrativas del portal.
            </td>

          </tr>

          <tr>

            <td>Centralizar los registros de eventos.</td>

            <td>
              Facilitar la detección y el análisis de incidentes de
              seguridad.
            </td>

          </tr>

          <tr>

            <td>Mantener actualizados servidores y aplicaciones.</td>

            <td>
              Corregir vulnerabilidades conocidas mediante parches de
              seguridad.
            </td>

          </tr>

        </tbody>

      </table>

      <h3>Plan de recuperación ante desastres</h3>

      <table className="tabla-cvss">

        <thead>

          <tr>

            <th>Etapa</th>

            <th>Acción</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Respaldo</td>

            <td>
              Mantener copias de seguridad automáticas de la base de datos
              y de la información importante del portal.
            </td>

          </tr>

          <tr>

            <td>Restauración</td>

            <td>
              Recuperar la información utilizando respaldos previamente
              verificados y comprobar que el sistema funcione
              correctamente.
            </td>

          </tr>

          <tr>

            <td>Notificación</td>

            <td>
              Informar el incidente al equipo de TI, autoridades
              municipales y usuarios afectados cuando corresponda.
            </td>

          </tr>

          <tr>

            <td>Validación</td>

            <td>
              Verificar el correcto funcionamiento del portal antes de
              volver a poner los servicios en operación.
            </td>

          </tr>

        </tbody>

      </table>

      <h3>Beneficios</h3>

      <ul>

        <li>Reducir el tiempo de recuperación frente a incidentes.</li>

        <li>Proteger la información de ciudadanos y funcionarios.</li>

        <li>Mantener la continuidad de los servicios municipales.</li>

        <li>Disminuir el impacto de futuros ataques informáticos.</li>

        <li>Mejorar la capacidad de respuesta del equipo de TI.</li>

      </ul>

      <h3>Conclusión</h3>

      <p>
        Las mejoras tecnológicas propuestas y el plan de recuperación
        permiten fortalecer la seguridad del portal de la Municipalidad
        de Cerro Verde.
      </p>

      <p>
        Además de reducir el impacto de posibles incidentes, estas medidas
        ayudan a garantizar la continuidad de los servicios digitales y la
        protección de la información administrada por la municipalidad.
      </p>

    </section>
  );
}

export default Recuperacion;