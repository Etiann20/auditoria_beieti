function Prompts() {
  return (
    <section id="prompts" className="card">

      <h2>Bitácora de Uso de Inteligencia Artificial</h2>

      <p>
        La inteligencia artificial fue utilizada como herramienta de apoyo
        durante el desarrollo de esta auditoría para comprender conceptos,
        organizar el informe, mejorar la redacción y apoyar el desarrollo de
        la aplicación en React.
      </p>

      <p>
        Todas las respuestas fueron revisadas y adaptadas antes de ser
        incorporadas al proyecto, utilizando además el material entregado en
        clases y la información obtenida durante las pruebas realizadas en
        DVWA.
      </p>

      {/* ============================== */}

      <div className="prompt-card">

        <h3>🤖 Organización del Informe</h3>

        <h4>Prompt utilizado</h4>

        <blockquote>
          "Ayúdame a organizar el informe siguiendo la rúbrica entregada por
          el profesor. Quiero que cada sección responda a los criterios de
          evaluación utilizando un lenguaje simple."
        </blockquote>

        <h4>Resultado obtenido</h4>

        <p>
          La respuesta permitió organizar el contenido del informe y detectar
          qué apartados era necesario desarrollar con mayor detalle.
          Posteriormente la estructura fue modificada para adaptarla al caso
          de la Municipalidad de Cerro Verde.
        </p>

      </div>

      {/* ============================== */}

      <div className="prompt-card">

        <h3>🤖 SQL Injection</h3>

        <h4>Prompt utilizado</h4>

        <blockquote>
          "Explícame qué es SQL Injection, por qué ocurre, cuál sería su
          impacto sobre un portal municipal y qué medidas recomienda OWASP
          para prevenir esta vulnerabilidad."
        </blockquote>

        <h4>Resultado obtenido</h4>

        <p>
          La respuesta permitió comprender mejor la vulnerabilidad y sirvió
          como base para redactar la explicación. Posteriormente el contenido
          fue adaptado utilizando las evidencias obtenidas durante la
          auditoría y el análisis CVSS realizado.
        </p>

      </div>

      {/* ============================== */}

      <div className="prompt-card">

        <h3>🤖 Reflected XSS</h3>

        <h4>Prompt utilizado</h4>

        <blockquote>
          "Explícame cómo funciona Reflected XSS, qué riesgos representa para
          un portal web y cuáles son las principales medidas de prevención."
        </blockquote>

        <h4>Resultado obtenido</h4>

        <p>
          La IA entregó una explicación general de la vulnerabilidad.
          Posteriormente se modificó el contenido para relacionarlo con el
          caso de la Municipalidad de Cerro Verde y con las pruebas
          realizadas en DVWA.
        </p>

      </div>

      {/* ============================== */}

      <div className="prompt-card">

        <h3>🤖 Command Injection</h3>

        <h4>Prompt utilizado</h4>

        <blockquote>
          "Explícame qué es Command Injection, cómo funciona y por qué se
          considera una vulnerabilidad crítica dentro de una aplicación web."
        </blockquote>

        <h4>Resultado obtenido</h4>

        <p>
          La información permitió comprender el funcionamiento de la
          vulnerabilidad y posteriormente fue reorganizada para adaptarla al
          contexto del portal municipal y al resultado obtenido durante la
          auditoría.
        </p>

      </div>

            {/* ============================== */}

        <div className="prompt-card">

        <h3>🤖 Activos y Matriz de Riesgos</h3>

        <h4>Prompt utilizado</h4>

        <blockquote>
          "Ayúdame a identificar los activos de información más importantes
          de una municipalidad y a construir una matriz de riesgos
          considerando probabilidad e impacto para SQL Injection,
          Reflected XSS y Command Injection."
        </blockquote>

        <h4>Resultado obtenido</h4>

        <p>
          La IA entregó una propuesta inicial de activos y una evaluación
          de riesgos. Posteriormente la información fue revisada y adaptada
          para mantener coherencia con el resto del informe y con los
          resultados obtenidos durante la auditoría.
        </p>

        </div>

        {/* ============================== */}

        <div className="prompt-card">

        <h3>🤖 Controles de Seguridad y Recuperación</h3>

        <h4>Prompt utilizado</h4>

        <blockquote>
          "Propón controles de seguridad y un plan de recuperación ante
          incidentes para una municipalidad que administra un portal web con
          información de ciudadanos."
        </blockquote>

        <h4>Resultado obtenido</h4>

        <p>
          La respuesta ayudó a estructurar las secciones de prevención,
          mitigación y recuperación. Después se reorganizó el contenido para
          ajustarlo a la rúbrica y al contexto del caso estudiado.
        </p>

        </div>

      {/* ============================== */}

      <div className="prompt-card">

        <h3>🤖 Activos y Matriz de Riesgos</h3>

        <h4>Prompt utilizado</h4>

        <blockquote>
          "Ayúdame a identificar los activos de información más importantes
          de una municipalidad y a construir una matriz de riesgos
          considerando probabilidad e impacto para SQL Injection,
          Reflected XSS y Command Injection."
        </blockquote>

        <h4>Resultado obtenido</h4>

        <p>
          La IA entregó una propuesta inicial de activos y una evaluación
          de riesgos. Posteriormente la información fue revisada y adaptada
          para mantener coherencia con el resto del informe y con los
          resultados obtenidos durante la auditoría.
        </p>

      </div>

      {/* ============================== */}

      <div className="prompt-card">

        <h3>🤖 Controles de Seguridad y Recuperación</h3>

        <h4>Prompt utilizado</h4>

        <blockquote>
          "Propón controles de seguridad y un plan de recuperación ante
          incidentes para una municipalidad que administra un portal web con
          información de ciudadanos."
        </blockquote>

        <h4>Resultado obtenido</h4>

        <p>
          La respuesta ayudó a estructurar las secciones de prevención,
          mitigación y recuperación. Después se reorganizó el contenido para
          ajustarlo a la rúbrica y al contexto del caso estudiado.
        </p>

      </div>


      <div className="prompt-card">

        <h3>🤖 Diseño de la Aplicación</h3>

        <h4>Prompt utilizado</h4>

        <blockquote>
          "Ayúdame a mejorar el diseño de mi aplicación desarrollada con
          React y Vite. Quiero una landing page moderna, dashboard,
          navegación fija, tarjetas para organizar el contenido y un diseño
          responsive."
        </blockquote>

        <h4>Resultado obtenido</h4>

        <p>
          La IA sirvió como apoyo para desarrollar gran parte de la interfaz
          inicial. Posteriormente fue necesario realizar varios cambios para
          mejorar la organización del contenido, la navegación y la
          presentación final del proyecto.
        </p>

      </div>

      <h3>Reflexión sobre el uso de IA</h3>

      <p>
        Durante este proyecto la inteligencia artificial fue utilizada como
        una herramienta de apoyo para investigar conceptos, organizar el
        informe y generar una primera versión de algunos textos.
      </p>

      <p>
        Sin embargo, prácticamente todas las respuestas tuvieron que ser
        revisadas y modificadas, ya que en varios casos la información era
        demasiado general o no estaba relacionada directamente con el caso
        de la Municipalidad de Cerro Verde.
      </p>

      <p>
        También fue necesario adaptar varias explicaciones para que
        coincidieran con la rúbrica de evaluación y con los resultados
        obtenidos durante la auditoría realizada en DVWA.
      </p>

      <p>
        En mi opinión, la inteligencia artificial fue una herramienta muy
        útil para organizar ideas y ahorrar tiempo durante el desarrollo del
        proyecto, pero el resultado final dependió de la revisión,
        investigación y adaptación realizada para cumplir con los objetivos
        de la auditoría.
      </p>

    </section>
  );
}

export default Prompts;