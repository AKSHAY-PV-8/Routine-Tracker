import type { TodosType } from "../organisms/MainSection"

type TodoStatusPropType = {
    todos: TodosType[]
}

const TodoStatus = ({ todos }: TodoStatusPropType) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="bg-[#111827] rounded-[10px] overflow-scroll border border-[#1e395e] p-4">
                <h1 className="text-[#65758c] text-[11px] font-bold mb-4">COMPLETION RATE</h1>
                {todos.map(todo =>
                    <div className="grid  gap-4  grid-cols-[1fr_250px_1fr] items-center text-center" key={todo.id}>
                        <div className="text-white">{todo.text}</div>
                        <div className="h-1.5 bg-[#1e2d45] rounded-2xl overflow-hidden">
                            <div className="w-[50%] bg-linear-to-r from-[#49de83] via-[#38d9b2] to-[#23d3eb]  h-full rounded-2xl"></div>
                        </div>
                        <div className="text-[#4ade80] text-[12px] font-bold">11%</div>
                    </div>
                )}
            </div>

            <div className="bg-[#111827] rounded-[10px] overflow-scroll border border-[#1e395e] p-4">
                <h1 className="text-[#65758c] text-[11px] font-bold mb-4">CURRENT STREAKS 🔥</h1>
                <div className="flex gap-3 flex-wrap ">
                    <Pills title={"Project"} streak={6} />
                    <Pills title={"Project"} streak={6} />
                    <Pills title={"Project"} streak={6} />
                    <Pills title={"Project"} streak={6} />
                </div>
            </div>
        </div>
    )
}

export default TodoStatus

type PillsPropType = {
    title: string,
    streak: number
}

function Pills({ title, streak }) {
    return (
        <div className="bg-[#1e2d45] text-[14px] font-medium flex gap-2 rounded-[10px] p-2">
            <span className="text-white">{title}</span>
            <span className="text-[#e39510]">{streak}d</span>
        </div>
    )
}
