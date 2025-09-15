import { ButtonIcon } from "../components/ButtonIcon";
import { Card } from "../components/Card";
import { InputCheckbox } from "../components/InputCheckbox";
import TrashIcon from '../assets/icons/Trash.svg?react'
import PencilIcon from '../assets/icons/Pencil.svg?react'
import XIcon from '../assets/icons/X.svg?react'
import CheckIcon from '../assets/icons/Check.svg?react'
import { Text } from "../components/Text";
import { useState, type ChangeEvent } from "react";
import { InputText } from "../components/InputText";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import { useTask } from "../hooks/use-task";
import { Skeleton } from "../components/Skeleton";

interface TaskItemProps{
  task: Task
  loading?: boolean
}

export function TaskItem({ task, loading }: TaskItemProps){
  const[isEditing, setIsEditing] = useState(task?.state === TaskState.Creating)
  const [taskTitle, setTaskTitle] = useState(task.title || '')
  const {updateTask, updateTaskStatus, deleteTask, isUpdatingTasks, isDeletingTasks} = useTask()

  function handleEditTask(){
    setIsEditing(true)
  }

  function handleCancelEditTask(){
    if(task.state === TaskState.Creating){
      deleteTask(task.id)
    }

    setIsEditing(false)
  }

  function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>){
    setTaskTitle(e.target.value || '') 
  }

  async function handleSaveTask(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    await updateTask(task.id, {title: taskTitle})
    setIsEditing(false)
  }

  function handleUpdateTaskStatus(e: ChangeEvent<HTMLInputElement>){
    const checked = e.target.checked
    updateTaskStatus(task.id, checked)
  }

  async function handleDeletedTask(){
    await deleteTask(task.id)
  }

  return(
    <Card size='md' >
      {!isEditing ? (
        <div className="flex items-center gap-3">
          <InputCheckbox 
            checked={task?.concluded}
            onChange={handleUpdateTaskStatus}
            loading={loading}
          />
          {!loading ? <Text className={cx("flex-1", {
              'line-through': task?.concluded
            })}>
            {task?.title}
          </Text> : 
            <Skeleton className="flex-1 h-6"/>
          }
          <div className="flex gap-1">
            <ButtonIcon 
              icon={TrashIcon} 
              variant='tertiary'
              onClick={handleDeletedTask}
              loading={loading}
              handling={isDeletingTasks}
            />
            <ButtonIcon 
              icon={PencilIcon} 
              variant='tertiary'
              onClick={handleEditTask}
              loading={loading}
            />
          </div>
        </div>
      ):(
        <form 
          className="flex items-center gap-3"
          onSubmit={handleSaveTask}
        >
          <InputText 
            value={taskTitle}
            className="flex-1" 
            onChange={handleChangeTaskTitle} 
            required 
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon 
              icon={XIcon} 
              variant='secondary'
              onClick={handleCancelEditTask}
              type="button"
            />
            <ButtonIcon 
              type="submit" 
              icon={CheckIcon} 
              variant='primary'
              handling={isUpdatingTasks}
            />
          </div>
        </form>
      )}
    </Card>
  )
}