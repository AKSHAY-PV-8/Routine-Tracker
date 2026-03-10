import { useEffect, useState } from "react"
import TodoList from "../molecules/TodoList";
import GridStatus from "../molecules/GridStatus";
import TodoStatus from "../molecules/TodoStatus";

export type TodosType = {
    id: string,
    text: string
}

const STORAGE_KEY = "secret"

const MainSection = () => {
    
    const [todos, setTodos] = useState<TodosType[]>(() => {
        const storage = localStorage.getItem(STORAGE_KEY);
        return storage ? JSON.parse(storage) : []
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    },[todos])
    
    function handleAddNewTodo(todo: TodosType){
        setTodos(prev => [...prev, todo]);
    }

    function handleDeleteTodo(id: string){
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }


  return (
    <div className="bg-[#0a0e1a] h-dvh p-2 flex flex-col gap-2">
        <TodoList onAddTodo={handleAddNewTodo} onDelete={handleDeleteTodo} todos={todos}/>
        <GridStatus todos={todos}/>
        <TodoStatus todos={todos}/>
    </div>
  )
}

export default MainSection
