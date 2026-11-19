import { describe, expect, it } from 'vitest'
import { createTask, filterTasks } from './taskUtils'

const tasks = [
  { id: '1', key: 'ORB-2', title: 'Diseñar tablero', description: 'UI de proyecto', priority: 'high' },
  { id: '2', key: 'ORB-7', title: 'Conectar API', description: 'Tareas backend', priority: 'medium' },
]

describe('filterTasks', () => {
  it('matches task titles without case sensitivity', () => {
    expect(filterTasks(tasks, 'TABLERO')).toHaveLength(2)
    expect(filterTasks(tasks, 'TABLERO')[0].key).toBe('ORB-2')
  })

  it('matches descriptions and issue keys', () => {
    expect(filterTasks(tasks, 'backend')).toHaveLength(1)
    expect(filterTasks(tasks, 'ORB-2')[0].title).toBe('Diseñar tablero')
  })

  it('filters by priority and ignores surrounding query whitespace', () => {
    expect(filterTasks(tasks, '  api ', 'medium').map((task) => task.key)).toEqual(['ORB-7'])
    expect(filterTasks(tasks, '', 'low')).toHaveLength(0)
  })
})

describe('createTask', () => {
  it('assigns the next issue key and trims user input', () => {
    const task = createTask({ title: '  Nuevo trabajo  ', description: ' detalle ', priority: 'low' }, tasks)
    expect(task.key).toBe('ORB-8')
    expect(task.title).toBe('Nuevo trabajo')
    expect(task.description).toBe('detalle')
    expect(task.status).toBe('todo')
  })
})
