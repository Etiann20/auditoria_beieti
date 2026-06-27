# Políticas de Prevención y Controles de Mitigación

## Introducción

Luego de identificar las vulnerabilidades presentes durante la auditoría, es necesario definir medidas que permitan reducir el riesgo para el portal de la Municipalidad de Cerro Verde.

Estas medidas se dividen en dos grupos: políticas de prevención, cuyo objetivo es evitar que las vulnerabilidades aparezcan durante el desarrollo de la aplicación, y controles de mitigación, que buscan disminuir el impacto si una vulnerabilidad llegara a ser explotada.

---

# Políticas de prevención

Las siguientes políticas están orientadas a prevenir vulnerabilidades como SQL Injection, Reflected XSS y Command Injection.

| Política | Vulnerabilidad asociada | Objetivo |
|----------|-------------------------|----------|
| Utilizar consultas parametrizadas (Prepared Statements). | SQL Injection | Evitar la ejecución de consultas SQL manipuladas por el usuario. |
| Validar y sanitizar todas las entradas del usuario. | SQL Injection, XSS y Command Injection | Impedir el ingreso de datos maliciosos al sistema. |
| Implementar Content Security Policy (CSP). | Reflected XSS | Reducir la ejecución de código JavaScript no autorizado. |
| Utilizar listas blancas (Whitelist). | Command Injection | Permitir únicamente valores previamente autorizados. |
| Capacitar a los desarrolladores en programación segura. | Todas | Disminuir errores durante el desarrollo del portal. |
| Realizar revisiones de código antes de publicar cambios. | Todas | Detectar vulnerabilidades antes de que lleguen al ambiente de producción. |

---

# Controles de mitigación

En caso de que una vulnerabilidad sea explotada, se recomienda implementar los siguientes controles para reducir su impacto.

| Control | Objetivo |
|----------|----------|
| Web Application Firewall (WAF). | Detectar y bloquear ataques contra la aplicación web. |
| Registro y monitoreo de eventos (Logs). | Detectar comportamientos anómalos e intentos de explotación. |
| Monitoreo continuo del servidor. | Identificar incidentes de seguridad oportunamente. |
| Aplicar el principio de mínimo privilegio. | Reducir el alcance de un posible ataque. |
| Auditorías periódicas de seguridad. | Detectar nuevas vulnerabilidades y verificar controles existentes. |
| Gestión de actualizaciones y parches. | Corregir vulnerabilidades conocidas en servidores y aplicaciones. |

---

# Relación con buenas prácticas

Las recomendaciones propuestas se encuentran alineadas con distintos marcos de referencia utilizados en ciberseguridad.

- **OWASP Top 10**, para reducir las principales vulnerabilidades en aplicaciones web.
- **NIST Cybersecurity Framework**, para fortalecer la gestión de riesgos y la respuesta frente a incidentes.
- **CIS Controls**, para implementar controles técnicos que mejoren la protección del portal municipal.

---

# Conclusión

La implementación de estas políticas y controles permitirá disminuir considerablemente el riesgo asociado a las vulnerabilidades identificadas durante la auditoría.

Además de proteger la información de ciudadanos y funcionarios, estas medidas contribuirán a mantener la continuidad de los servicios digitales entregados por la Municipalidad de Cerro Verde.