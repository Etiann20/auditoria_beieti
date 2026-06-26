# SQL Injection (Inyección SQL)

## Descripción

La vulnerabilidad **SQL Injection (SQLi)** permite que un atacante manipule las consultas SQL que una aplicación envía a la base de datos. Esto ocurre cuando la aplicación incorpora directamente los datos ingresados por el usuario dentro de una consulta SQL sin realizar una validación o sanitización adecuada.

Como consecuencia, un atacante puede acceder, modificar o eliminar información almacenada en la base de datos, dependiendo de los permisos del sistema.

---

## Evidencia

**Aplicación utilizada:** DVWA (Damn Vulnerable Web Application)

**Nivel de seguridad:** Low

**Payload utilizado:**

```sql
' OR '1'='1
```

**Resultado obtenido:**

> *Pendiente de agregar captura de pantalla una vez realizado el laboratorio.*

**Captura:**

![SQL Injection](img_beieti/sqli_beieti.png)

---

## ¿Por qué funciona?

La vulnerabilidad funciona porque la aplicación concatena directamente la información ingresada por el usuario dentro de una consulta SQL.

Por ejemplo, una consulta vulnerable podría construirse de la siguiente forma:

```sql
SELECT * FROM users WHERE id = '$id';
```

Si el usuario ingresa:

```sql
' OR '1'='1
```

La consulta queda:

```sql
SELECT * FROM users WHERE id = '' OR '1'='1';
```

La condición `'1'='1'` siempre es verdadera, por lo que la base de datos devuelve todos los registros en lugar de únicamente el solicitado.

Este tipo de ataque permite omitir validaciones y obtener acceso a información que normalmente debería estar protegida.

---

## Impacto para la Municipalidad de Cerro Verde

Si esta vulnerabilidad existiera en el portal de la Municipalidad de Cerro Verde, un atacante podría acceder a información sensible como:

- Datos personales de los ciudadanos.
- Información de funcionarios municipales.
- Patentes comerciales.
- Permisos municipales.
- Registros de pagos.
- Información administrativa.

La exposición de estos datos podría afectar la privacidad de los ciudadanos, generar pérdida de confianza en la institución y provocar incumplimientos en materia de protección de datos.

---

## Evaluación CVSS

**Versión:** CVSS v3.1

**Puntaje estimado:** **9.1 / 10**

**Severidad:** Crítica

**Justificación:**

- Exposición de información confidencial.
- Posibilidad de modificar registros.
- Alto impacto sobre la confidencialidad e integridad.
- Fácil explotación cuando no existen controles de validación.

---

## Defensa

Para prevenir este tipo de vulnerabilidad se recomienda:

- Utilizar consultas parametrizadas (Prepared Statements).
- Validar todas las entradas del usuario.
- Implementar procedimientos almacenados cuando corresponda.
- Aplicar el principio de mínimo privilegio en la base de datos.
- Registrar y monitorear intentos de acceso sospechosos.
- Realizar pruebas periódicas de seguridad sobre las aplicaciones web.