import type {TaskItemProps} from '../../types'

export default function TaskItem({task, onStatusChange, onDelete}:TaskItemProps) {
     
    return(
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            <select>
                <option value="ending">Pending</option>
                <option value="in-progress">In progress</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    )
}