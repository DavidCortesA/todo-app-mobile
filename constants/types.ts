export interface Task {
  id: number
  name: string
  done: boolean
  priotity: Prioritis
  description?: string
  tag?: string
}

export type Prioritis = 'alta' | 'media' | 'baja'