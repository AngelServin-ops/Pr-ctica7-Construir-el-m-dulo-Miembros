import { Horario, Miembro } from '../inscripciones/dominio/entidades.js';

// Los cupos son chicos a proposito: asi el 409 de cupo lleno se
// alcanza en tres peticiones y se puede probar en clase.
export const HORARIOS: Horario[] = [
  { id: 1, claseId: 1, dia: 'lunes', horaInicio: '07:00', cupoMaximo: 2, entrenador: 'Martha' },
  { id: 2, claseId: 1, dia: 'miercoles', horaInicio: '07:00', cupoMaximo: 3, entrenador: 'Mario' },
  { id: 3, claseId: 2, dia: 'martes', horaInicio: '19:00', cupoMaximo: 4, entrenador: 'Luis' },
];

export const MIEMBROS: Miembro[] = [
  { id: 1, nombre: 'Angel Servin', correo: 'angel@itson.mx', membresia: 'premium', activo: true },
  { id: 2, nombre: 'Andrea Melendrez', correo: 'andrea@itson.mx', membresia: 'plus', activo: true },
  { id: 3, nombre: 'Dana Chavez', correo: 'dana@itson.mx', membresia: 'basica', activo: true },
];
