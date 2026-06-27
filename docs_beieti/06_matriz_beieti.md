# Matriz de Riesgo y Mapa de Calor

## Introducción

Una vez identificados los activos de información del portal de la Municipalidad de Cerro Verde, se evaluó el riesgo asociado a cada vulnerabilidad considerando dos factores:

- **Probabilidad:** posibilidad de que la vulnerabilidad sea explotada.
- **Impacto:** consecuencias que tendría sobre el funcionamiento del portal y la información almacenada.

La combinación de ambos factores permitió establecer la prioridad de tratamiento para cada vulnerabilidad.

---

# Matriz de Riesgo

| Vulnerabilidad | Probabilidad | Impacto | Nivel de Riesgo |
|----------------|--------------|---------|-----------------|
| SQL Injection | Alta | Alto | 🟠 Alto |
| Reflected XSS | Media | Medio | 🟡 Medio |
| Command Injection | Muy Alta | Crítico | 🔴 Crítico |

---

# Mapa de Calor

| Probabilidad \\ Impacto | Bajo | Medio | Alto | Crítico |
|--------------------------|------|-------|------|----------|
| Muy Alta | 🟢 | 🟠 | 🔴 | 🔴 |
| Alta | 🟢 | 🟡 | 🟠 | 🔴 |
| Media | 🟢 | 🟡 | 🟠 | 🔴 |
| Baja | 🟢 | 🟢 | 🟡 | 🟠 |

Ubicación de las vulnerabilidades:

- 🔴 Command Injection
- 🟠 SQL Injection
- 🟡 Reflected XSS

---

# Justificación

### Command Injection

Se clasificó como riesgo **Crítico**, ya que permite ejecutar comandos directamente sobre el servidor. Si esta vulnerabilidad existiera en el portal municipal, un atacante podría comprometer completamente el servidor y afectar la disponibilidad de los servicios.

### SQL Injection

Se clasificó como riesgo **Alto**, debido a que permite acceder a información almacenada en la base de datos. La información de ciudadanos y funcionarios podría quedar expuesta, afectando principalmente la confidencialidad de los datos.

### Reflected XSS

Se clasificó como riesgo **Medio**, ya que requiere que un usuario interactúe con contenido malicioso para que el ataque tenga efecto. Aunque el impacto es menor que las otras vulnerabilidades, sigue representando un riesgo para la seguridad del portal.

---

# Priorización de Vulnerabilidades

La prioridad de tratamiento se estableció considerando tanto la matriz de riesgo como los puntajes obtenidos mediante CVSS.

| Prioridad | Vulnerabilidad | Justificación |
|-----------|----------------|---------------|
| 1 | Command Injection | Riesgo crítico y puntaje CVSS 10.0. Puede comprometer completamente el servidor. |
| 2 | SQL Injection | Riesgo alto y puntaje CVSS 7.1. Permite acceder a información de la base de datos. |
| 3 | Reflected XSS | Riesgo medio y puntaje CVSS 6.1. Requiere interacción del usuario para su explotación. |

---

# Conclusión

La matriz de riesgo permitió establecer una prioridad para implementar las medidas de seguridad propuestas.

De acuerdo con los resultados obtenidos, la primera vulnerabilidad que debe corregirse es **Command Injection**, seguida por **SQL Injection** y finalmente **Reflected XSS**, ya que este orden coincide tanto con el nivel de riesgo como con los puntajes obtenidos mediante la metodología CVSS.