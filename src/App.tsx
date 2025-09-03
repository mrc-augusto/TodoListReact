import { Text } from "./components/Text";
import TrashIcon from './assets/trash.svg?react';
import SpinnerIcon from './assets/spinner.svg?react';
import { Icon } from "./components/Icon";


export function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="body-md-bold">Todo List</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-pink-base"/>
        <Icon svg={SpinnerIcon} className="fill-blue-base" animate/>
      </div>
    </div>
    
  )
}

