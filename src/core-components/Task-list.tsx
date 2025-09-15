import { Button } from "../components/Button";
import PlusIcon from '../assets/icons/Plus.svg?react';
import { TaskItem } from "./Task-item";
import { useTasks } from "../hooks/use-tasks";
import { useTask } from "../hooks/use-task";
import { TaskState, type Task } from "../models/task";

export function TaskList(){
  const {tasks, isLoadingTasks} = useTasks()
  const{prepareTask} = useTask()

  function handleCreateNewTask(){
    prepareTask()
  }

  return(
    <>
      <section>
        <Button 
          icon={PlusIcon} 
          className="w-full" 
          onClick={handleCreateNewTask}
          disabled={tasks.some((task)=>task.state === TaskState.Creating) || isLoadingTasks}
        >
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task)=> <TaskItem key={task.id} task={task}/> )
        }
        {isLoadingTasks &&
          <>
            <TaskItem task={{} as Task} loading/>
            <TaskItem task={{} as Task} loading/>
            <TaskItem task={{} as Task} loading/>
          </>
        }
      </section>
    </>
  )
}