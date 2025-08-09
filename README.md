# AI-Driven Software Development LifeCycle

Este repositorio reúne la documentación pública necesaria para implementar y operar el **AI-Driven
SDLC**, un marco de trabajo que integra de forma profunda a los copilotos de inteligencia artificial
(en nuestro caso, **Cursor**) en el ciclo de desarrollo de software.

Estos documentos cumplen un rol clave:

- **Servir como guías de referencia** para que desarrolladores humanos y copilotos trabajen con un
  entendimiento compartido del sistema, sus convenciones y procesos.
- **Asegurar que el contexto relevante esté siempre disponible**, facilitando que el copiloto genere
  código, pruebas o documentación con la mayor precisión posible.
- **Estandarizar prácticas y decisiones técnicas**, de manera que cualquier persona o IA pueda
  integrarse rápidamente al flujo de trabajo y contribuir de forma efectiva.

**Nota:** Este marco de trabajo incluye archivos de contexto de negocio que, por razones de
confidencialidad, no se publican en este repositorio. Se trata de `ACME_BUSINESS_CONTEXT.md` y
`BU_BUSINESS_CONTEXT.md`.

El primero describe qué hace la compañía Acme: su organización, productos, mercados y visión. El
segundo detalla la misión, funcionalidades y dominios clave de cada unidad de negocio.

La razón de mantenerlos como documentos separados, y no combinarlos en un único archivo, es la
limitación actual de la ventana de contexto de los copilotos, lo que hace más eficiente proveer esta
información de forma modular.

---

## Documentos incluidos

- [ARCHITECTURE.md](ARCHITECTURE.md) – Describe la estructura y componentes del sistema, cómo
  interactúan y las decisiones técnicas que guían su evolución.
- [DATABASE.md](DATABASE.md) – Documenta las estructuras de datos persistentes, sus campos, tipos,
  relaciones y convenciones de modelado utilizadas.
- [DATABASE_ER.md](DATABASE_ER.md) – Incluye diagramas que representan visualmente tablas, campos y
  relaciones o estructuras no relacionales.
- [TESTING.md](TESTING.md) – Define la estrategia de pruebas, tipos de test, herramientas y
  convenciones para garantizar la calidad del software.
- [SECURITY.md](SECURITY.md) – Enumera políticas, prácticas y estándares de seguridad que protegen
  datos, accesos y la integridad del sistema.
- [CODE_GUIDELINES.md](CODE_GUIDELINES.md) – Establece reglas de estilo, modularidad, manejo de
  errores y convenciones para escribir código consistente.
- [DEPLOYMENT.md](DEPLOYMENT.md) – Detalla los pasos, entornos, herramientas y validaciones
  necesarias para un despliegue seguro y controlado.
- [OBSERVABILITY.md](OBSERVABILITY.md) – Define cómo se monitorea el sistema, qué métricas se siguen
  y cómo se gestionan alertas y eventos críticos.
- [TASKS_GUIDELINES.md](TASKS_GUIDELINES.md) – Explica cómo redactar y estructurar tareas en formato
  compatible con el copiloto para ejecución asistida.
- [MARKDOWN_GUIDELINES.md](MARKDOWN_GUIDELINES.md)– Convenciones y buenas prácticas para escribir
  archivos Markdown en el proyecto, orientadas a garantizar claridad y consistencia tanto para
  lectores humanos como para copilotos.
