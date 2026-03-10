import TickIcon from "../../assets/TickIcon"
import type { TodosType } from "../organisms/MainSection"
import Calendar from "./Calendar"

type GridStatusProp = {
    todos: TodosType[]
}


const GridStatus = ({ todos }: GridStatusProp) => {

    const now = new Date()
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const numberOfDays = new Date(year, month + 1, 0).getDate();

    const checkBoxes: number[] = []
    for (let i = 1; i <= numberOfDays; i++) {
        checkBoxes.push(i)
    }
    return (
        <div className="bg-[#111827] rounded-[10px] overflow-scroll border border-[#1e395e] ">
            <Calendar />
            <div className="my-3">
                {todos.map(todo => (
                    <div key={todo.id} className="flex text-[12px]">
                        <div className="uppercase text-white w-30 shrink-0 text-center">{todo.text}</div>
                        <div className="flex ">
                            {checkBoxes.map(checkBox =>

                                <label className="relative items-center p-px" key={checkBox}>
                                    <input
                                        type="checkbox"
                                        style={{ borderColor: checkBox === day ? "#4ade80" : "#1e3a5f" }}
                                        className="peer appearance-none w-5 h-5 rounded-md bg-[#0a0e1a] border checked:bg-[#4ade80] disabled:bg-gray-600 hover:scale-110 hover:border-[#20c8e2]"
                                        disabled={checkBox <= day ? false : true}
                                    />
                                    <TickIcon />
                                </label>
                            )}
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default GridStatus
