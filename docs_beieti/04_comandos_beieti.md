# Command Injection (Inyección de Comandos)

## Descripción

La vulnerabilidad **Command Injection** permite que un atacante ejecute comandos del sistema operativo a través de una aplicación web. Esto ocurre cuando la aplicación utiliza datos proporcionados por el usuario para construir comandos del sistema sin realizar una validación adecuada.

Si un atacante logra explotar esta vulnerabilidad, puede obtener acceso a información del servidor, modificar archivos, ejecutar programas o incluso tomar el control del sistema comprometido, dependiendo de los privilegios con los que se ejecute la aplicación.

---

## Evidencia

**Aplicación utilizada:** DVWA (Damn Vulnerable Web Application)

**Nivel de seguridad:** Low

**Payload utilizado:**

```bash
127.0.0.1; cat /etc/passwd
```

**Resultado obtenido:**

> *Pendiente de agregar captura de pantalla una vez realizado el laboratorio.*

**Captura:**

![Command Injection](img_beieti/comandos_beieti.png)

---

## ¿Por qué funciona?

La vulnerabilidad ocurre porque la aplicación incorpora directamente la entrada del usuario dentro de un comando del sistema operativo.

En este caso, el carácter `;` permite finalizar el comando original y ejecutar un segundo comando.

Por ejemplo, si la aplicación ejecuta:

```bash
ping 127.0.0.1
```

y el usuario ingresa:

```bash
127.0.0.1; cat /etc/passwd
```

el sistema interpreta ambos comandos y ejecuta:

```bash
ping 127.0.0.1
cat /etc/passwd
```

Como resultado, además de realizar el comando esperado, también muestra el contenido del archivo `/etc/passwd`, demostrando que es posible ejecutar comandos arbitrarios en el servidor.

---

## Impacto para la Municipalidad de Cerro Verde

Si esta vulnerabilidad existiera en el portal de la Municipalidad de Cerro Verde, un atacante podría:

- Obtener información del sistema operativo.
- Acceder a archivos internos del servidor.
- Modificar o eliminar información crítica.
- Interrumpir los servicios digitales municipales.
- Instalar software malicioso.
- Comprometer la infraestructura tecnológica de la municipalidad.

Este tipo de vulnerabilidad representa un riesgo crítico debido a que puede afectar tanto la disponibilidad como la confidencialidad e integridad de la información institucional.

---

## Evaluación CVSS

**Versión:** CVSS v3.1

**Puntaje estimado:** **9.8 / 10**

**Severidad:** Crítica

**Justificación:**

- Permite la ejecución de comandos directamente en el servidor.
- Puede comprometer completamente el sistema.
- Afecta la confidencialidad, integridad y disponibilidad de la información.
- Su explotación puede derivar en el control total del servidor si no existen mecanismos de protección.

---

## Defensa

Para prevenir ataques de Command Injection se recomienda:

- Evitar ejecutar comandos del sistema operativo utilizando entradas proporcionadas por los usuarios.
- Validar estrictamente todos los datos recibidos.
- Utilizar listas blancas (whitelists) para aceptar únicamente valores permitidos.
- Ejecutar la aplicación con el principio de mínimo privilegio.
- Implementar monitoreo y registro de actividades sospechosas.
- Mantener actualizados los sistemas y realizar auditorías de seguridad periódicas.