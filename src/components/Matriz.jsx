function Matriz() {
    return (
      <section id="matriz" className="card">
  
        <h2>Matriz de Riesgos</h2>
  
        <p>
          La siguiente matriz representa la evaluación del riesgo para las
          vulnerabilidades identificadas durante la auditoría,
          considerando la probabilidad de ocurrencia y el impacto que
          tendrían sobre la Municipalidad de Cerro Verde.
        </p>
  
        <div className="matriz">
  
          <div></div>
  
          <div className="header">Muy Bajo</div>
          <div className="header">Bajo</div>
          <div className="header">Medio</div>
          <div className="header">Alto</div>
          <div className="header">Crítico</div>
  
          <div className="header">Muy Alta</div>
  
          <div className="verde"></div>
          <div className="amarillo"></div>
          <div className="naranjo"></div>
          <div className="rojo"></div>
          <div className="rojo">
            <span>SQLi</span>
          </div>
  
          <div className="header">Alta</div>
  
          <div className="verde"></div>
          <div className="amarillo"></div>
          <div className="amarillo"></div>
          <div className="rojo">
            <span>CMD</span>
          </div>
          <div className="rojo"></div>
  
          <div className="header">Media</div>
  
          <div className="verde"></div>
          <div className="verde"></div>
          <div className="amarillo">
            <span>XSS</span>
          </div>
          <div className="naranjo"></div>
          <div className="rojo"></div>
  
          <div className="header">Baja</div>
  
          <div className="verde"></div>
          <div className="verde"></div>
          <div className="amarillo"></div>
          <div className="amarillo"></div>
          <div className="naranjo"></div>
  
          <div className="header">Muy Baja</div>
  
          <div className="verde"></div>
          <div className="verde"></div>
          <div className="verde"></div>
          <div className="amarillo"></div>
          <div className="amarillo"></div>
  
        </div>
  
        <div className="leyenda">
  
          <div><span className="box verde"></span> Riesgo Bajo</div>
  
          <div><span className="box amarillo"></span> Riesgo Medio</div>
  
          <div><span className="box naranjo"></span> Riesgo Alto</div>
  
          <div><span className="box rojo"></span> Riesgo Crítico</div>
  
        </div>
  
      </section>
    );
  }
  
  export default Matriz;