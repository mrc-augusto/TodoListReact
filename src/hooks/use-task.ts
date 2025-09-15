import useLocalStorage from "use-local-storage";
import { TASKS_KEY, Task, TaskState } from "../models/task";
import { useState } from "react";
import { delay } from "../helpers/utils";

export function useTask(){
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, [])
  const [isUpdatingTasks, setIsUpdatingTasks] = useState(false)
  const [isDeletingTasks, setIsDeletingTasks] = useState(false)

  function prepareTask(){
    setTasks([...tasks, {
      id: Math.random().toString(36).substring(2,9),
      title: '',
      state: TaskState.Creating
    }])
  }

  function updateTask( id: string, payload: {title: Task['title']}){
    setTasks(
      tasks.map((task) => task.id === id 
        ? {...task, state: TaskState.Created, ...payload} 
        : task
      )
    )
  }

  async function updateTaskStatus(id: string, concluded: boolean){
    setIsUpdatingTasks(true)
    await delay(1000)

    setTasks(
      tasks.map((task)=>task.id === id ? {...task, concluded} : task)
    )
    setIsUpdatingTasks(false)
  }

  async function deleteTask(id: string){
    setIsDeletingTasks(true)
    await delay(1000)

    setTasks(
      tasks.filter((task)=>task.id !== id)
    )
    setIsDeletingTasks(false)
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTasks,
    isDeletingTasks
  }
}