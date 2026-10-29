# Task Manager

A task management app built with React and TypeScript for **Lab 3: Lists, Keys, and Conditionals**. It displays a list of tasks, filters them by status and priority, and changes how each task looks based on its properties.

<!-- Optional: add a screenshot of the finished app here -->
<!-- ![Task Manager screenshot](./screenshot.png) -->

## Features

<!-- Check these off as you finish them -->

- [ ] Display a list of tasks with unique keys
- [ ] Filter tasks by status
- [ ] Filter tasks by priority
- [ ] Change a task's status
- [ ] Delete a task
- [ ] Different styles based on status and priority
- [ ] Hover and active states

## Getting Started

```bash
git clone https://github.com/DimsuCodes/task-manager.git
cd task-manager
npm install
npm run dev
```

Then open the local URL Vite prints in the terminal (usually http://localhost:5173).

## Project Structure

```
src/
  components/
    TaskList/
      TaskList.tsx     # Renders the list of tasks
    TaskItem/
      TaskItem.tsx     # Displays a single task
    TaskFilter/
      TaskFilter.tsx   # Status and priority filter controls
  types/
    index.ts           # Shared TypeScript types and interfaces
  App.tsx              # Holds the task and filter state
```

## Components

### TaskList

<!-- What does it do? -->

**Props**

| Prop | Type | Description |
| --- | --- | --- |
| `tasks` | `Task[]` | |
| `onStatusChange` | `(taskId: string, newStatus: TaskStatus) => void` | |
| `onDelete` | `(taskId: string) => void` | |

**Example usage**

```tsx
// Show how you use <TaskList /> in App
```

### TaskItem

<!-- What does it do? -->

**Props**

| Prop | Type | Description |
| --- | --- | --- |
| `task` | `Task` | |
| `onStatusChange` | `(taskId: string, newStatus: TaskStatus) => void` | |
| `onDelete` | `(taskId: string) => void` | |

**Example usage**

```tsx
// Show how <TaskItem /> is used inside TaskList
```

### TaskFilter

<!-- What does it do? -->

**Props**

| Prop | Type | Description |
| --- | --- | --- |
| `onFilterChange` | `(filters: { status?: TaskStatus; priority?: 'low' \| 'medium' \| 'high' }) => void` | |

**Example usage**

```tsx
// Show how you use <TaskFilter /> in App
```

## Types

<!-- Briefly describe Task, TaskStatus, and the props interfaces in src/types/index.ts -->

## Reflection Questions

**1. How did you ensure unique keys for your list items?**

<!-- Your answer -->

**2. What considerations did you make when implementing the filtering functionality?**

<!-- Your answer -->

**3. How did you handle state updates for task status changes?**

<!-- Your answer -->

**4. What challenges did you face when implementing conditional rendering?**

<!-- Your answer -->

## Optional: One Step Further

<!-- Delete this section if you don't attempt it -->

- [ ] Sort tasks by due date
- [ ] Add a new task with a form
- [ ] Move tasks up and down the list

## Built With

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)

## Credits

- Lab instructions: Per Scholas, Lab 3: Lists, Keys, and Conditionals
- Used Claude (Anthropic) as a tutor for explanations, project setup, and code review
<!-- Add any tutorials, docs, or other resources you used -->
