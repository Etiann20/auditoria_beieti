function Controles() {
  return (
    <section id="controles" className="card">

      <h2>Políticas de Prevención y Controles de Mitigación</h2>

      <h3>Introducción</h3>

      <p>
        Luego de identificar las vulnerabilidades presentes durante la
        auditoría, es necesario definir medidas que permitan reducir el
        riesgo para el portal de la Municipalidad de Cerro Verde.
      </p>

      <p>
        Estas medidas se dividen en dos grupos: políticas de prevención,
        cuyo objetivo es evitar que las vulnerabilidades aparezcan durante
        el desarrollo de la aplicación, y controles de mitigación, que
        buscan disminuir el impacto si una vulnerabilidad llegara a ser
        explotada.
      </p>

      <h3>Políticas de prevención</h3>

      <table className="tabla-cvss">

        <thead>

          <tr>

            <th>Política</th>

            <th>Vulnerabilidad asociada</th>

            <th>Objetivo</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Consultas parametrizadas (Prepared Statements).</td>

            <td>SQL Injection</td>

            <td>
              Evitar la ejecución de consultas SQL manipuladas por el
              usuario.
            </td>

          </tr>

          <tr>

            <td>Validar y sanitizar todas las entradas.</td>

            <td>SQL Injection, XSS y Command Injection</td>

            <td>
              Impedir el ingreso de datos maliciosos al sistema.
            </td>

          </tr>

          <tr>

            <td>Implementar Content Security Policy (CSP).</td>

            <td>Reflected XSS</td>

            <td>
              Reducir la ejecución de código JavaScript no autorizado.
            </td>

          </tr>

          <tr>

            <td>Utilizar listas blancas (Whitelist).</td>

            <td>Command Injection</td>

            <td>
              Permitir únicamente valores previamente autorizados.
            </td>

          </tr>

          <tr>

            <td>Capacitar a los desarrolladores.</td>

            <td>Todas</td>

            <td>
              Disminuir errores durante el desarrollo del portal.
            </td>

          </tr>

          <tr>

            <td>Revisiones de código antes de publicar cambios.</td>

            <td>Todas</td>

            <td>
              Detectar vulnerabilidades antes de llegar al ambiente de
              producción.
            </td>

          </tr>

        </tbody>

      </table>

      <h3>Controles de mitigación</h3>

      <table className="tabla-cvss">

        <thead>

          <tr>

            <th>Control</th>

            <th>Objetivo</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Web Application Firewall (WAF).</td>

            <td>
              Detectar y bloquear ataques dirigidos contra la aplicación.
            </td>

          </tr>

          <tr>

            <td>Registro y monitoreo de eventos (Logs).</td>

            <td>
              Detectar actividades sospechosas e intentos de explotación.
            </td>

          </tr>

          <tr>

            <td>Monitoreo continuo del servidor.</td>

            <td>
              Identificar incidentes de seguridad oportunamente.
            </td>

          </tr>

          <tr>

            <td>Principio de mínimo privilegio.</td>

            <td>
              Reducir el alcance de un posible ataque.
            </td>

          </tr>

          <tr>

            <td>Auditorías periódicas de seguridad.</td>

            <td>
              Detectar nuevas vulnerabilidades y verificar los controles.
            </td>

          </tr>

          <tr>

            <td>Gestión de actualizaciones y parches.</td>

            <td>
              Corregir vulnerabilidades conocidas en servidores y
              aplicaciones.
            </td>

          </tr>

        </tbody>

      </table>

      <h3>Relación con buenas prácticas</h3>

      <p>
        Las recomendaciones propuestas se encuentran alineadas con
        distintos marcos de referencia utilizados actualmente en
        ciberseguridad.
      </p>

      <ul>

        <li>
          <strong>OWASP Top 10:</strong> ayuda a prevenir las principales
          vulnerabilidades presentes en aplicaciones web.
        </li>

        <li>
          <strong>NIST Cybersecurity Framework:</strong> fortalece la
          gestión de riesgos y la respuesta frente a incidentes.
        </li>

        <li>
          <strong>CIS Controls:</strong> entrega controles técnicos para
          mejorar la protección del portal municipal.
        </li>

      </ul>

      <h3>Conclusión</h3>

      <p>
        La implementación de estas políticas de prevención y controles de
        mitigación permitirá disminuir considerablemente el riesgo asociado
        a las vulnerabilidades identificadas durante la auditoría.
      </p>

      <p>
        Además de proteger la información de ciudadanos y funcionarios,
        estas medidas contribuirán a mantener la continuidad de los
        servicios digitales entregados por la Municipalidad de Cerro
        Verde.
      </p>

    </section>
  );
}

export default Controles;