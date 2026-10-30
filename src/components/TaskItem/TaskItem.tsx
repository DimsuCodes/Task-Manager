import type {TaskItemProps, TaskStatus} from '../../types'

export default function TaskItem({task, onStatusChange, onDelete}:TaskItemProps) {
     
    return(
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Due Date: {new Date(task.dueDate).toLocaleDateString('en-Us', {timeZone: 'UTC'})}</p>
            <select onChange={(e)=> onStatusChange(task.id, e.target.value as TaskStatus)}>
                <option value="pending">Pending</option>
                <option value="in-progress">In progress</option>
                <option value="completed">Completed</option>
            </select>
            <button onClick={()=>onDelete(task.id)}>Delete</button>
        </div>
    )
}