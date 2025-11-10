import { Task } from "@/constants/types";

export const Tasks: Task[] = [
  {
    id: 1,
    name: 'Ejercicio',
    description: 'Hacer ejercicio todos los dias',
    done: false,
    tag: 'saludable',
    priotity: 'alta'
  },
  {
    id: 2,
    name: 'Estudiar',
    description: 'Estudiar programación 2 horas',
    done: false,
    tag: 'educación',
    priotity: 'media'
  },
  {
    id: 3,
    name: 'Compras',
    description: 'Ir al supermercado',
    done: false,
    tag: 'compras',
    priotity: 'baja'
  },
  {
    id: 4,
    name: 'Limpiar',
    description: 'Limpiar la casa',
    done: false,
    tag: 'hogar',
    priotity: 'alta'
  },
  {
    id: 5,
    name: 'Proyecto trabajo',
    description: 'Terminar feature de autenticación',
    done: true,
    tag: 'trabajo',
    priotity: 'alta'
  }
]
