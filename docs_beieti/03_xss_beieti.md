# Cross Site Scripting (XSS)

## Descripción

La vulnerabilidad **Cross Site Scripting (XSS)** permite a un atacante inyectar código JavaScript malicioso dentro de una página web. Cuando otro usuario accede a esa página, el navegador ejecuta dicho código como si fuera parte legítima del sitio web.

En esta auditoría se analizará la variante **Reflected XSS**, donde el código malicioso es enviado mediante una solicitud y reflejado inmediatamente por la aplicación.

---

## Evidencia

**Aplicación utilizada:** DVWA (Damn Vulnerable Web Application)

**Nivel de seguridad:** Low

**Payload utilizado:**

```html
<script>alert('XSS')</script>
```

**Resultado obtenido:**

> *Pendiente de agregar captura de pantalla una vez realizado el laboratorio.*

**Captura:**

![Cross Site Scripting](img_beieti/xss_beieti.png)

---

## ¿Por qué funciona?

La vulnerabilidad ocurre porque la aplicación devuelve al navegador la información ingresada por el usuario sin validarla ni sanitizarla.

Cuando el navegador recibe una etiqueta `<script>`, la interpreta como código JavaScript válido y la ejecuta automáticamente.

En este caso, el payload utilizado genera una ventana emergente (`alert`), demostrando que es posible ejecutar código arbitrario dentro del navegador de la víctima.

En un escenario real, un atacante podría utilizar esta vulnerabilidad para robar cookies de sesión, capturar credenciales, modificar el contenido de la página o redirigir a los usuarios hacia sitios fraudulentos.

---

## Impacto para la Municipalidad de Cerro Verde

Si esta vulnerabilidad estuviera presente en el portal municipal, un atacante podría:

- Robar sesiones de ciudadanos o funcionarios.
- Suplantar la identidad de usuarios autenticados.
- Modificar el contenido mostrado en el portal.
- Redirigir a los usuarios hacia sitios maliciosos.
- Capturar información ingresada en formularios municipales.

Estas acciones podrían afectar la confianza de la ciudadanía y comprometer la seguridad de los servicios digitales ofrecidos por la municipalidad.

---

## Evaluación CVSS

**Versión:** CVSS v3.1

**Puntaje estimado:** **6.1 / 10**

**Severidad:** Media

**Justificación:**

- Permite la ejecución de código JavaScript en el navegador de la víctima.
- Puede facilitar el robo de sesiones y credenciales.
- Requiere la interacción del usuario para que el ataque tenga éxito.
- El impacto depende de los privilegios de la víctima.

---

## Defensa

Para prevenir ataques XSS se recomienda:

- Validar y sanitizar todas las entradas de los usuarios.
- Escapar correctamente los caracteres especiales antes de mostrar información en el navegador.
- Implementar políticas de seguridad como **Content Security Policy (CSP)**.
- Utilizar cookies con los atributos **HttpOnly** y **Secure**.
- Realizar pruebas de seguridad periódicas sobre las aplicaciones web.