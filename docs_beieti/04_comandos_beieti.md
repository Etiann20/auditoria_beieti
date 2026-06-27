# Command Injection

## ¿Qué es Command Injection?

Command Injection es una vulnerabilidad que ocurre cuando una aplicación ejecuta comandos del sistema operativo utilizando información ingresada por el usuario sin realizar una validación adecuada.

Si un atacante logra explotar esta vulnerabilidad, puede ejecutar comandos directamente sobre el servidor, acceder a archivos internos, modificar información o incluso comprometer completamente el sistema operativo.

En un portal como el de la Municipalidad de Cerro Verde, una vulnerabilidad de este tipo representa un riesgo crítico, ya que podría afectar tanto la información almacenada como la disponibilidad de los servicios municipales.

---

# Evidencia

La prueba fue realizada utilizando DVWA configurado con el nivel de seguridad **Low**.

Para comprobar la vulnerabilidad se utilizó el siguiente payload:

```bash
127.0.0.1; cat /etc/passwd
```

Al ejecutar la prueba, la aplicación realizó el comando **ping** y posteriormente ejecutó el comando **cat /etc/passwd**, mostrando el contenido del archivo directamente en la página.

Este resultado demuestra que la aplicación ejecuta comandos enviados por el usuario sin validar correctamente la información recibida.

## Evidencia obtenida

### Evidencia de explotación

![Command Injection](img_beieti/command_beieti.png)

*Figura 1. Ejecución exitosa de Command Injection utilizando el payload `127.0.0.1; cat /etc/passwd`. Como resultado fue posible visualizar el contenido del archivo `/etc/passwd`, confirmando la existencia de la vulnerabilidad.*

---

### Cálculo CVSS v3.1

![CVSS Command Injection](img_beieti/commandCal_beieti.png)

*Figura 2. Resultado obtenido utilizando la calculadora oficial CVSS v3.1 para determinar la severidad de la vulnerabilidad.*

---

# ¿Por qué ocurre?

Esta vulnerabilidad ocurre porque la aplicación utiliza directamente la información ingresada por el usuario para construir comandos del sistema operativo sin realizar una validación adecuada.

Como consecuencia, el sistema interpreta el payload enviado como un comando válido y lo ejecuta con los permisos de la aplicación.

En este caso, el operador `;` permitió ejecutar un segundo comando independiente, obteniendo acceso al contenido del archivo `/etc/passwd`.

---

# Evaluación CVSS v3.1

**Puntaje obtenido:** **10.0 / 10**

**Severidad:** **Crítica**

### Vector CVSS

```text
CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H
```

## ¿Qué significa este puntaje?

La vulnerabilidad presenta una severidad **Crítica**, ya que permite ejecutar comandos directamente sobre el servidor sin requerir autenticación ni interacción de otros usuarios.

Durante la auditoría fue posible acceder al contenido del archivo `/etc/passwd`, demostrando que un atacante podría comprometer completamente el servidor.

En un escenario real, esto podría afectar gravemente la infraestructura tecnológica de la Municipalidad de Cerro Verde y provocar la interrupción de sus servicios digitales.

---

# Políticas de prevención

Para evitar este tipo de vulnerabilidades se recomienda:

- Validar estrictamente todas las entradas recibidas desde el usuario.
- Utilizar listas blancas (Whitelist) para permitir únicamente valores autorizados.
- Evitar ejecutar comandos del sistema utilizando información ingresada por usuarios.
- Utilizar funciones seguras proporcionadas por el lenguaje de programación.
- Capacitar a los desarrolladores en prácticas de programación segura.

Estas medidas eliminan la causa principal de la vulnerabilidad, evitando que el usuario pueda ejecutar comandos arbitrarios sobre el servidor.

---

# Controles de mitigación

Si la vulnerabilidad ya existiera dentro del sistema, se recomienda implementar:

- Ejecutar la aplicación utilizando el principio de mínimo privilegio.
- Implementar un Web Application Firewall (WAF).
- Registrar y monitorear la ejecución de comandos sospechosos.
- Implementar monitoreo continuo de eventos de seguridad.
- Realizar auditorías periódicas utilizando las recomendaciones de **OWASP Top 10**.
- Aplicar controles definidos por **OWASP**, **NIST Cybersecurity Framework** y **CIS Controls**.

Estos controles permiten reducir el impacto de una explotación y facilitan la detección temprana de actividades maliciosas sobre el servidor.

---

# Comparación de Severidad (CVSS v3.1)

Luego de evaluar las tres vulnerabilidades encontradas durante la auditoría, se compararon los puntajes obtenidos mediante la metodología CVSS v3.1 para determinar cuáles representan un mayor riesgo para el portal de la Municipalidad de Cerro Verde.

| Vulnerabilidad | Puntaje CVSS | Severidad |
|----------------|-------------:|-----------|
| SQL Injection | **7.1** | Alta |
| Reflected XSS | **6.1** | Media |
| Command Injection | **10.0** | Crítica |

## Análisis

De acuerdo con los resultados obtenidos, **Command Injection** representa la vulnerabilidad más crítica identificada durante la auditoría, ya que permite ejecutar comandos directamente sobre el servidor y comprometer la confidencialidad, integridad y disponibilidad del sistema.

Por otra parte, **SQL Injection** presenta un riesgo alto debido a la posibilidad de acceder a información almacenada en la base de datos municipal.

Finalmente, **Reflected XSS** obtuvo una severidad media, ya que requiere la interacción del usuario para que el ataque tenga efecto, aunque sigue representando un riesgo importante para la seguridad del portal.

Esta comparación permitió establecer la prioridad para la implementación de controles de seguridad, comenzando por Command Injection, seguido de SQL Injection y finalmente Reflected XSS.