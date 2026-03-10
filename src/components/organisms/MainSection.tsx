import { useState } from "react"
import TodoList from "../molecules/TodoList";
import GridStatus from "../molecules/GridStatus";
import TodoStatus from "../molecules/TodoStatus";

export type TodosType = {
    id: string,
    text: string
}

const MainSection = () => {
    const [todos, setTodos] = useState<TodosType[]>([
        {id: "sdfasdf",text: "read"},
        {id: "sasdf",text: "write"},
        {id: "sdfsdf",text: "walk"},
    ]);
    function handleAddNewTodo(todo: TodosType){
        setTodos(prev => [...prev, todo])
    }

  return (
    <div className="bg-[#0a0e1a] h-dvh p-2 flex flex-col gap-2">
        <TodoList onAddTodo={handleAddNewTodo} todos={todos}/>
        <GridStatus todos={todos}/>
        <TodoStatus todos={todos}/>
    </div>
  )
}

export default MainSection
