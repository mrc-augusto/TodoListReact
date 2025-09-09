import { Container } from "../components/Container";
import { TaskItem } from "../core-components/Task-item";
import { TaskList } from "../core-components/Task-list";
import { TaskSummary } from "../core-components/Tasks-summary";

export function PageHome(){
  return(
    <Container as='article' className="space-y-3">
      <header className="flex items-center justify-between">
        <TaskSummary/>
      </header>
      <TaskList/>
    </Container>
  )
} 