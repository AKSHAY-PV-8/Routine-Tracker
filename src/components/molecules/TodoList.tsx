import { useState } from "react"
import AddPopUp from "../atoms/AddPopUp"
import type { TodosType } from "../organisms/MainSection"
import TickIcon from "../../assets/TickIcon"

type TodosListPropType = {
  todos: TodosType[],
  onAddTodo: (todo: TodosType) => void
  onDelete: (id: string) => void
}

const TodoList = ({ todos, onAddTodo, onDelete }: TodosListPropType) => {
  const [isPopUpVisible, setPopUpVisible] = useState<boolean>(false);
  const currentMonth = new Date().toLocaleDateString("en-US", { month: "long" });
  const currentDay = new Date().getDate()

  function handleShowPopUp() {
    setPopUpVisible(true);
  }

  function handleCloseButton() {
    setPopUpVisible(false);
  }

  return (
    <>
      <div className="border border-[#1e395e] rounded-2xl overflow-hidden bg-[#111827]">
        <div className="flex justify-between bg-[#1e2d45] items-center p-3">
          <h2 className=" text-[#22d1ec] text-[12px] font-bold">TODAY - {currentMonth} {currentDay}</h2>
          <div className="text-[#46cd7a] text-[12px] font-bold">0/10</div>
        </div>

        {todos.map(todo =>
          <div className="" key={todo.id} >
            <div className="flex gap-3 items-center p-5">
                <label className="relative flex items-center">
                  <input
                    type="checkbox"
                    className="peer appearance-none w-6 h-6 border border-[#1e3a5f] rounded-md bg-[#0a0e1a] checked:bg-[#4ade80]"
                  />
                  <TickIcon />
                </label>
              <div className="text-white text-[20px] italic">{todo.text}</div>
              <button onClick={() => onDelete(todo.id)} className="bg-[#1e2d45] text-[#64748b] text-[18px] p-1 
        rounded-md font-bold border hover:text-[#22d1ec] hover:scale-110">❌</button>
            </div>
            <hr className=" text-[#15243a]" />
          </div>
        )}
        <div className="flex justify-center p-2">
          <button onClick={handleShowPopUp} className="bg-[#1e2d45] text-[#64748b] text-[18px] px-6 py-2 
        rounded-md font-bold border hover:text-[#22d1ec] hover:scale-110">ADD</button>

        </div>
      </div>
      {
        isPopUpVisible && <AddPopUp onClickAdd={onAddTodo} onClickCloseButton={handleCloseButton} />
      }
    </>
  )
}

export default TodoList
