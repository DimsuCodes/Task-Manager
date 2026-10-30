

import TaskFilter from "./components/TaskFilter/TaskFilter";
import TaskItem from "./components/TaskItem/TaskItem";
import TaskList from "./components/TaskList/TaskList";

export default function App () {

    const myFakeTask= { 
        id: '1',
        title: 'Coding Day!',
        description: "Today I'll be creating code",
        status: 'pending',
        priority: 'high',
        dueDate: '2026-12-31',

    };
           return (
        <div>
            {/* <TaskList/> */}
            <TaskItem 
            task={myFakeTask} 
            onStatusChange={(id, status)=> 
            console.log(id,status)}
            onDelete={(id) => console.log(id)}
            />
            {/* <TaskFilter/> */}
        </div>
    )
    };
 
