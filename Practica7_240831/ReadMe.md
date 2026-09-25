## Cuestionario de la Práctica

1. ¿Por qué la interfaz no menciona Express, NestJS ni memoria?
Porque pertenece al dominio y es solo un contrato. Define qué hacer con los datos, sin importar el framework o la base de datos usada.

2. ¿Qué palabra promete cumplir la interfaz?
implements. Le indica a TypeScript que la clase cumplirá con todo lo definido en la interfaz.

3. ¿Por qué miembros.service.ts desconoce las peticiones HTTP?
Porque solo gestiona la lógica de negocio. Procesar peticiones, rutas y respuestas HTTP es trabajo exclusivo del Controller.

4. ¿Por qué el Service no usa token y el Repositorio sí?
El Service es una clase real que NestJS detecta directo. El Repositorio es una interfaz que se borra al compilar a JS, por lo que NestJS necesita un token @Inject() para saber qué usar.

5. ¿Qué demuestra que Miembros no rompió Inscripciones?
Pasar las pruebas automatizadas (unitarias y E2E), lo que confirma que las funciones anteriores siguen trabajando sin errores.