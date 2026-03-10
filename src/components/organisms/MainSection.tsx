import { useEffect, useState } from "react"
import TodoList from "../molecules/TodoList";
import GridStatus from "../molecules/GridStatus";
import TodoStatus from "../molecules/TodoStatus";

type status = {
    [year: number]: {
        [month: string]: {
            [day: number]: boolean
        }
    }
}

export type TodosType = {
    id: string,
    text: string,
    status: status
}


const STORAGE_KEY = "secret"

const MainSection = () => {

    const [todos, setTodos] = useState<TodosType[]>(() => {
        const storage = localStorage.getItem(STORAGE_KEY);
        return storage ? JSON.parse(storage) : []
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function handleAddNewTodo(todo: TodosType) {
        setTodos(prev => [...prev, todo]);
    }

    function handleDeleteTodo(id: string) {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    function handleUpdateStatus(id:string, day: number) {
        console.log(id,day)
        const now = new Date();
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        
        setTodos(prev => prev.map(todo => {
            if(todo.id !== id) return todo

            const prevYear = todo.status[year] || {}
            const prevMonth = prevYear[month] || {}
            const currentValue = todo.status?.[year]?.[month]?.[day] || false

            return {
                ...todo,
                status: {
                    ...todo.status,
                    [year]: {
                        ...prevYear,
                        [month]:{
                            ...prevMonth,
                            [day]: !currentValue
                        }
                    }
                }
            }

        }))
    }



    return (
        <div className="bg-[#0a0e1a] h-dvh p-2 flex flex-col gap-2">
            <TodoList onAddTodo={handleAddNewTodo}
                onDelete={handleDeleteTodo}
                todos={todos}
                onUpdateStatus={handleUpdateStatus} />
            <GridStatus todos={todos} onUpdateStatus={handleUpdateStatus}/>
            <TodoStatus todos={todos} />
        </div>
    )
}

export default MainSection


