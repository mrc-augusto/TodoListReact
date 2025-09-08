import { Badge } from "../components/Bage";
import { Button } from "../components/Button";
import { ButtonIcon } from "../components/ButtonIcon";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Icon } from "../components/Icon";
import { InputCheckbox } from "../components/InputCheckbox";
import { InputText } from "../components/InputText";
import { Skeleton } from "../components/Skeleton";
import { Text } from "../components/Text";
import TrashIcon from '../assets/icons/Trash.svg?react'
import PlusIcon from '../assets/icons/Plus.svg?react'
import SpinnerIcon from '../assets/icons/Spinner.svg?react'

export function PageComponents(){
  return (
    <Container>
      <div className="grid gap-3 px-5">
        <div className="flex flex-col gap-1">
          <Text variant="body-md-bold">Todo List</Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-pink-base"/>
          <Icon svg={PlusIcon} className="fill-green-base"/>
          <Icon svg={SpinnerIcon} className="fill-blue-base" animate/>
        </div>

        <div className="flex gap-3">
          <Badge variant='secondary'> 2</Badge>
          <Badge variant='primary'> 2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>    

        <div>
          <Button variant={'primary'} size={'md'} icon={PlusIcon}>
            Nova Tarefa
          </Button>
        </div>

        <div className="flex gap-2">
          <ButtonIcon icon={TrashIcon} variant='primary'/>
          <ButtonIcon icon={TrashIcon} variant='secondary'/>
          <ButtonIcon icon={TrashIcon} variant='tertiary'/>
          <ButtonIcon icon={TrashIcon} loading/>
        </div>

        <div>
          <InputText/>
        </div>

        <div className="flex gap-2">
          <InputCheckbox/>
          <InputCheckbox loading/>
        </div>

        <div>
          <Card size='md'>Olá</Card>
        </div>

        <div className="flex flex-col gap-3">
          <Skeleton className="h-6"/>
          <Skeleton className="h-6"/>
          <Skeleton className="w-96 h-6"/>
        </div>

      </div>
    </Container>
  )
}