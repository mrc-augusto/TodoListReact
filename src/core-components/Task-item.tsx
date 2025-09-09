import { ButtonIcon } from "../components/ButtonIcon";
import { Card } from "../components/Card";
import { InputCheckbox } from "../components/InputCheckbox";
import TrashIcon from '../assets/icons/Trash.svg?react'
import PencilIcon from '../assets/icons/Pencil.svg?react'
import XIcon from '../assets/icons/X.svg?react'
import CheckIcon from '../assets/icons/Check.svg?react'
import { Text } from "../components/Text";
import { useState } from "react";
import { InputText } from "../components/InputText";

export function TaskItem(){
  const[isEditing, setIsEditing] = useState(false)

  function handleEditTask(){
    setIsEditing(true)
  }

  function handleCancelEditTask(){
    setIsEditing(false)
  }

  return(
    <Card size='md' className="flex items-center gap-3">
      {!isEditing ? (
        <>
          <InputCheckbox/>
          <Text className="flex-1">🛒Fazer Compras da Semana</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant='tertiary'/>
            <ButtonIcon 
              icon={PencilIcon} 
              variant='tertiary'
              onClick={handleEditTask}
            />
          </div>
        </>
      ):(
        <>
          <InputText className="flex-1"/>
          <div className="flex gap-1">
            <ButtonIcon 
              icon={XIcon} 
              variant='secondary'
              onClick={handleCancelEditTask}
            />
            <ButtonIcon icon={CheckIcon} variant='primary'/>
          </div>
        </>
      )}
    </Card>
  )
}