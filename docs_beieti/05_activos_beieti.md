# Activos y Riesgos según la Industria

## Introducción

Antes de definir las medidas de seguridad, primero es necesario identificar los activos de información más importantes del portal de la Municipalidad de Cerro Verde.

Estos activos permiten que el portal funcione correctamente y almacenan información relevante para la municipalidad y los ciudadanos. Si alguno de ellos se ve comprometido por una vulnerabilidad, podría afectar la continuidad de los servicios y la seguridad de la información.

---

# Activos identificados

Se identificaron los siguientes activos principales del portal:

| Activo | Clasificación | Justificación |
|---------|---------------|---------------|
| Base de datos municipal | Información | Almacena información de ciudadanos, funcionarios, permisos y registros municipales. |
| Portal web municipal | Servicio | Permite a los ciudadanos acceder a los distintos servicios y trámites en línea. |
| Servidor de aplicaciones | Infraestructura | Ejecuta el sitio web y procesa las solicitudes realizadas por los usuarios. |
| Cuentas de funcionarios | Credenciales | Permiten administrar el portal y acceder a funciones internas del sistema. |

---

# Relación entre vulnerabilidades y activos

Cada vulnerabilidad identificada durante la auditoría afecta distintos activos del portal.

| Vulnerabilidad | Activos afectados |
|----------------|-------------------|
| SQL Injection | Base de datos municipal, Portal web municipal |
| Reflected XSS | Portal web municipal, Cuentas de funcionarios |
| Command Injection | Servidor de aplicaciones, Base de datos municipal, Portal web municipal |

---

# Justificación

La vulnerabilidad **SQL Injection** pone en riesgo principalmente la base de datos, ya que permite acceder a información almacenada sin autorización.

Por otra parte, **Reflected XSS** afecta principalmente el portal web y las cuentas de los funcionarios, debido a que puede ejecutar código malicioso en el navegador de los usuarios.

Finalmente, **Command Injection** representa el mayor riesgo, ya que compromete directamente el servidor donde se ejecuta la aplicación y puede afectar también la base de datos y el funcionamiento del portal.

---

# Conclusión

La identificación de estos activos permitió establecer cuáles son los elementos más importantes que deben protegerse dentro del portal de la Municipalidad de Cerro Verde.

Además, esta clasificación servirá como base para construir la matriz de riesgos y definir posteriormente las medidas de prevención, mitigación y recuperación propuestas durante la auditoría.