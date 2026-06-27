# Reflected XSS

## ¿Qué es Reflected XSS?

Reflected Cross Site Scripting (XSS) es una vulnerabilidad que ocurre cuando una aplicación devuelve información ingresada por el usuario sin validarla ni codificarla correctamente antes de mostrarla en el navegador.

Cuando esto sucede, un atacante puede inyectar código JavaScript que será ejecutado por el navegador de la víctima, permitiendo realizar acciones como mostrar contenido falso, robar información de sesión o redirigir al usuario hacia sitios maliciosos.

En un portal como el de la Municipalidad de Cerro Verde, una vulnerabilidad de este tipo podría afectar tanto a ciudadanos como a funcionarios municipales que utilicen el sistema.

---

# Evidencia

La prueba fue realizada utilizando DVWA configurado con el nivel de seguridad **Low**.

Para comprobar la vulnerabilidad se utilizó el siguiente payload:

```html
<script>alert('XSS')</script>
```

Después de enviar el payload, la aplicación devolvió el mismo contenido sin validarlo, ejecutando el código JavaScript directamente en el navegador.

Como resultado apareció una ventana emergente (alert), confirmando que el navegador interpretó el código enviado por el usuario.

## Evidencia obtenida

### Payload utilizado

![Payload XSS](img_beieti/xss_payload.png)

*Figura 1. Payload utilizado durante la prueba para comprobar la vulnerabilidad Reflected XSS.*

---

### Resultado obtenido

![Resultado XSS](img_beieti/xss_resultado.png)

*Figura 2. El navegador ejecutó correctamente el código JavaScript enviado mediante el payload, confirmando la existencia de la vulnerabilidad.*

---

### Cálculo CVSS v3.1

![CVSS XSS](img_beieti/cvss_xss.png)

*Figura 3. Resultado obtenido utilizando la calculadora oficial CVSS v3.1 para determinar la severidad de la vulnerabilidad.*

---

# ¿Por qué ocurre?

Esta vulnerabilidad ocurre porque la aplicación devuelve directamente la información enviada por el usuario sin validarla ni aplicar mecanismos de codificación (Output Encoding).

Como consecuencia, el navegador interpreta el contenido recibido como código JavaScript válido y lo ejecuta automáticamente.

En este caso, el payload fue reflejado por la aplicación y posteriormente ejecutado por el navegador, demostrando la existencia de la vulnerabilidad.

---

# Evaluación CVSS v3.1

**Puntaje obtenido:** **6.1 / 10**

**Severidad:** **Media**

### Vector CVSS

```text
CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N
```

## ¿Qué significa este puntaje?

La vulnerabilidad presenta una severidad **Media**, ya que requiere que un usuario interactúe con el contenido malicioso para que el ataque tenga efecto.

En un escenario real, un atacante podría utilizar esta vulnerabilidad para engañar a ciudadanos o funcionarios municipales, robar información de sesión o mostrar contenido falso dentro del portal municipal.

---

# Políticas de prevención

Para evitar este tipo de vulnerabilidades se recomienda:

- Validar todas las entradas recibidas desde el usuario.
- Aplicar Output Encoding antes de mostrar información en el navegador.
- Implementar Content Security Policy (CSP).
- Evitar insertar directamente contenido HTML generado por el usuario.
- Capacitar a los desarrolladores en buenas prácticas de desarrollo seguro.

Estas medidas reducen considerablemente la posibilidad de que código JavaScript malicioso sea ejecutado dentro del navegador.

---

# Controles de mitigación

Si la vulnerabilidad ya existiera dentro del sistema, se recomienda implementar:

- Configurar cookies **HttpOnly** y **Secure**.
- Implementar un Web Application Firewall (WAF).
- Registrar y monitorear actividades sospechosas mediante logs.
- Implementar monitoreo continuo de eventos de seguridad.
- Realizar auditorías periódicas siguiendo las recomendaciones de **OWASP Top 10**.
- Aplicar controles definidos por **OWASP**, **NIST Cybersecurity Framework** y **CIS Controls**.

Estos controles permiten disminuir el impacto de una explotación y mejorar la capacidad de detección de ataques contra el portal municipal.