# SQL Injection

## ¿Qué es SQL Injection?

SQL Injection es una vulnerabilidad web que ocurre cuando una aplicación incorpora directamente los datos ingresados por el usuario dentro de una consulta SQL sin validarlos correctamente.

Cuando esto sucede, un atacante puede modificar la consulta original mediante instrucciones SQL propias, obteniendo acceso a información que normalmente no debería visualizar. Dependiendo del nivel de vulnerabilidad del sistema, también es posible modificar, eliminar o insertar registros dentro de la base de datos.

En un portal como el de la Municipalidad de Cerro Verde, una vulnerabilidad de este tipo podría comprometer información de ciudadanos, funcionarios municipales y distintos registros administrativos, afectando la seguridad y confiabilidad del servicio.

---

# Evidencia

La prueba fue realizada utilizando la aplicación de laboratorio **DVWA** configurada con el nivel de seguridad **Low**.

Para comprobar la vulnerabilidad se utilizó el siguiente payload:

```sql
1' OR '1'='1
```

Al ejecutar la consulta, la aplicación devolvió todos los registros almacenados en la base de datos en lugar de mostrar únicamente el usuario solicitado.

Este resultado demuestra que la entrada ingresada por el usuario fue interpretada como parte de la consulta SQL, permitiendo modificar completamente su comportamiento.

## Evidencia obtenida

### Evidencia de explotación

![SQL Injection](img_beieti/sqli_beieti.png)

*Figura 1. Ejecución exitosa de SQL Injection utilizando el payload `1' OR '1'='1`. La aplicación devolvió todos los registros almacenados en la base de datos, confirmando la existencia de la vulnerabilidad.*

---

### Cálculo CVSS v3.1

![CVSS SQL Injection](img_beieti/sqliCal_beieti.png)

*Figura 2. Resultado obtenido utilizando la calculadora oficial CVSS v3.1 para determinar la severidad de la vulnerabilidad.*

---

# ¿Por qué ocurre?

Esta vulnerabilidad ocurre porque la aplicación utiliza directamente la información ingresada por el usuario para construir la consulta SQL, sin validar ni separar correctamente los datos del código de la consulta.

Debido a esto, el motor de base de datos interpreta el payload enviado como si fuera parte de la instrucción SQL original, permitiendo alterar la lógica de la consulta.

En este caso, la condición `'1'='1'` siempre resulta verdadera, provocando que la aplicación entregue todos los registros existentes en la base de datos.

---

# Evaluación CVSS v3.1

**Puntaje obtenido:** **7.1 / 10**

**Severidad:** **Alta**

### Vector CVSS

```text
CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:L/A:N
```

## ¿Qué significa este puntaje?

El resultado obtenido corresponde a una vulnerabilidad de severidad **Alta**, ya que puede explotarse de forma remota, requiere poca complejidad técnica y no necesita la participación de otros usuarios para ejecutarse.

Durante la auditoría se comprobó que fue posible acceder a información almacenada en la base de datos, afectando principalmente la confidencialidad de los datos.

Si una vulnerabilidad como esta existiera en el portal de la Municipalidad de Cerro Verde, un atacante podría acceder a información personal de ciudadanos, antecedentes de funcionarios municipales y distintos registros administrativos, comprometiendo información sensible y generando pérdida de confianza en los servicios digitales.

---

# Políticas de prevención

Para evitar que esta vulnerabilidad exista dentro de una aplicación web se recomienda:

- Utilizar consultas parametrizadas (Prepared Statements).
- Validar todos los datos recibidos desde formularios y parámetros URL.
- Sanitizar las entradas antes de procesarlas.
- Evitar construir consultas SQL concatenando texto ingresado por el usuario.
- Aplicar revisiones de código durante el desarrollo.
- Capacitar a los desarrolladores en prácticas de programación segura.

Estas medidas atacan directamente la causa que origina la vulnerabilidad, evitando que la información ingresada por el usuario sea interpretada como código SQL.

---

# Controles de mitigación

Si la vulnerabilidad ya existiera dentro del sistema, se recomienda implementar controles que permitan disminuir el impacto de un posible ataque:

- Implementar un **Web Application Firewall (WAF)** para detectar y bloquear intentos de SQL Injection.
- Registrar y monitorear intentos de acceso sospechosos mediante logs del servidor.
- Aplicar el principio de mínimo privilegio a las cuentas utilizadas por la base de datos.
- Implementar monitoreo continuo y generación de alertas ante actividades anómalas.
- Realizar auditorías periódicas de seguridad utilizando las recomendaciones de **OWASP Top 10**.
- Utilizar controles definidos por marcos de referencia como **OWASP**, **NIST Cybersecurity Framework** y **CIS Controls** para fortalecer la seguridad de la aplicación.

Estos controles permiten reducir el impacto de una explotación y facilitan la detección temprana de posibles ataques contra el portal municipal.