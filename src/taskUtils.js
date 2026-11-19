export const columns = [
  { id: 'todo', title: 'Por hacer', color: '#8993a4' },
  { id: 'progress', title: 'En progreso', color: '#6c65d9' },
  { id: 'done', title: 'Completado', color: '#36a987' },
]

export function filterTasks(tasks, query, priority = 'all') {
  const normalized = query.trim().toLowerCase()
  return tasks.filter((task) => {
    const matchesQuery = !normalized || `${task.title} ${task.description} ${task.key}`.toLowerCase().includes(normalized)
    return matchesQuery && (priority === 'all' || task.priority === priority)
  })
}

export function createTask(data, tasks) {
  const nextNumber = Math.max(0, ...tasks.map((task) => Number(task.key.split('-')[1]) || 0)) + 1
  return { id: crypto.randomUUID(), key: `ORB-${nextNumber}`, title: data.title.trim(), description: data.description.trim(), status: data.status || 'todo', priority: data.priority || 'medium', assignee: data.assignee || 'RR', dueDate: data.dueDate || '' }
}
