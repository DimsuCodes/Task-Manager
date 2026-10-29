

import TaskFilter from "./components/TaskFilter/TaskFilter";
import TaskItem from "./components/TaskItem/TaskItem";
import TaskList from "./components/TaskList/TaskList";

export default function App () {
    return (
        <div>
            <TaskList/>
            <TaskItem/>
            <TaskFilter/>
        </div>
    )
}