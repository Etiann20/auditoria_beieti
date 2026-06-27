function Matriz() {
  return (
    <section id="matriz" className="card">

      <h2>Matriz de Riesgo y Mapa de Calor</h2>

      <h3>Introducción</h3>

      <p>
        Una vez identificados los activos de información del portal de la
        Municipalidad de Cerro Verde, se evaluó el riesgo asociado a cada
        vulnerabilidad considerando dos factores principales.
      </p>

      <ul>

        <li>
          <strong>Probabilidad:</strong> posibilidad de que la
          vulnerabilidad sea explotada.
        </li>

        <li>
          <strong>Impacto:</strong> consecuencias que tendría sobre el
          funcionamiento del portal y la información almacenada.
        </li>

      </ul>

      <p>
        La combinación de ambos factores permitió establecer la prioridad
        para tratar cada vulnerabilidad detectada durante la auditoría.
      </p>

      <h3>Matriz de Riesgo</h3>

      <table className="tabla-cvss">

        <thead>

          <tr>

            <th>Vulnerabilidad</th>

            <th>Probabilidad</th>

            <th>Impacto</th>

            <th>Nivel de Riesgo</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>SQL Injection</td>

            <td>Alta</td>

            <td>Alto</td>

            <td className="alta">
              🟠 Alto
            </td>

          </tr>

          <tr>

            <td>Reflected XSS</td>

            <td>Media</td>

            <td>Medio</td>

            <td className="media">
              🟡 Medio
            </td>

          </tr>

          <tr>

            <td>Command Injection</td>

            <td>Muy Alta</td>

            <td>Crítico</td>

            <td className="critica">
              🔴 Crítico
            </td>

          </tr>

        </tbody>

      </table>

      <h3>Mapa de Calor</h3>

      <table className="tabla-cvss">

        <thead>

          <tr>

            <th>Probabilidad \ Impacto</th>

            <th>Bajo</th>

            <th>Medio</th>

            <th>Alto</th>

            <th>Crítico</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Muy Alta</td>

            <td>🟢</td>

            <td>🟠</td>

            <td>🔴</td>

            <td>🔴</td>

          </tr>

          <tr>

            <td>Alta</td>

            <td>🟢</td>

            <td>🟡</td>

            <td>🟠</td>

            <td>🔴</td>

          </tr>

          <tr>

            <td>Media</td>

            <td>🟢</td>

            <td>🟡</td>

            <td>🟠</td>

            <td>🔴</td>

          </tr>

          <tr>

            <td>Baja</td>

            <td>🟢</td>

            <td>🟢</td>

            <td>🟡</td>

            <td>🟠</td>

          </tr>

        </tbody>

      </table>

      <p>

        <strong>Ubicación de las vulnerabilidades:</strong>

      </p>

      <ul>

        <li>🔴 Command Injection</li>

        <li>🟠 SQL Injection</li>

        <li>🟡 Reflected XSS</li>

      </ul>

      <h3>Justificación</h3>

      <p>
        <strong>Command Injection</strong> fue clasificada como un riesgo
        crítico, ya que permite ejecutar comandos directamente sobre el
        servidor. Si esta vulnerabilidad existiera en el portal municipal,
        un atacante podría comprometer completamente el sistema y afectar la
        disponibilidad de los servicios.
      </p>

      <p>
        <strong>SQL Injection</strong> fue clasificada como un riesgo alto
        porque permite acceder a información almacenada en la base de datos,
        comprometiendo datos de ciudadanos y funcionarios municipales.
      </p>

      <p>
        <strong>Reflected XSS</strong> obtuvo un riesgo medio debido a que
        requiere la interacción del usuario para que el ataque tenga efecto.
        Aun así, puede utilizarse para engañar usuarios y comprometer
        información de sesión.
      </p>

      <h3>Priorización de Vulnerabilidades</h3>

      <table className="tabla-cvss">

        <thead>

          <tr>

            <th>Prioridad</th>

            <th>Vulnerabilidad</th>

            <th>Justificación</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>1</td>

            <td>Command Injection</td>

            <td>
              Riesgo crítico y puntaje CVSS 10.0. Puede comprometer
              completamente el servidor.
            </td>

          </tr>

          <tr>

            <td>2</td>

            <td>SQL Injection</td>

            <td>
              Riesgo alto y puntaje CVSS 7.1. Permite acceder a información
              almacenada en la base de datos.
            </td>

          </tr>

          <tr>

            <td>3</td>

            <td>Reflected XSS</td>

            <td>
              Riesgo medio y puntaje CVSS 6.1. Requiere interacción del
              usuario para su explotación.
            </td>

          </tr>

        </tbody>

      </table>

      <h3>Conclusión</h3>

      <p>
        La matriz de riesgo permitió establecer una prioridad para la
        implementación de controles de seguridad dentro del portal de la
        Municipalidad de Cerro Verde.
      </p>

      <p>
        De acuerdo con los resultados obtenidos, la primera vulnerabilidad
        que debería corregirse es <strong>Command Injection</strong>,
        seguida por <strong>SQL Injection</strong> y finalmente
        <strong> Reflected XSS</strong>, ya que este orden coincide con el
        nivel de riesgo obtenido y con los puntajes calculados mediante
        CVSS v3.1.
      </p>

    </section>
  );
}

export default Matriz;