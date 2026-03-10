import { useState } from "react"
import type { TodosType } from "../organisms/MainSection"

type PopUpPropType = {
    onClickAdd: (todo: TodosType) => void;
    onClickCloseButton: () => void;
}

const AddPopUp = ({ onClickAdd, onClickCloseButton }: PopUpPropType) => {
    const [text, setText] = useState("");

    function handleNewTodo() {
        const newTodo = { id: crypto.randomUUID(), text: text };
        onClickAdd(newTodo);
        setText("");
        onClickCloseButton()
    }
    return (
        <>
            <div className="bg-[#1e2d45] text-[#20c8e2] p-6 flex flex-col gap-5 justify-center m-4 rounded-md border">
                <input type="text" value={text} onChange={e => setText(e.target.value)}
                    className="bg-gray-600 border border-[#20c8e2] text-white p-3 rounded-md" placeholder="New Todo" />
                <div>
                    <button onClick={handleNewTodo} className="bg-[#1e2d45] text-[#64748b] text-[18px] px-6 py-2 
        rounded-md font-bold border hover:text-[#22d1ec] hover:scale-110">Add</button>
                <button onClick={onClickCloseButton} className="bg-[#1e2d45] text-[#64748b] text-[18px] px-6 py-2 
        rounded-md font-bold border hover:text-[#22d1ec] hover:scale-110">close</button>
                </div>

            </div>

        </>
    )
}

export default AddPopUp
