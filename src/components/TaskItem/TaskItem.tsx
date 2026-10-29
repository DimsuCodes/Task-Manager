import type {TaskItemProps} from '../../types'

export default function TaskItem({task, onStatusChange, onDelete}:TaskItemProps) {
     
    return(
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    )
}