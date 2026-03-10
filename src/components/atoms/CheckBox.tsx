
const CheckBox = () => {
    return (
        <div>
            <label className="relative flex items-center">
                <input
                    type="checkbox"
                    className="peer appearance-none w-6 h-6 border border-[#1e3a5f] rounded-md bg-[#0a0e1a] checked:bg-[#4ade80]"
                />

                <svg
                    className="absolute w-4 h-4 left-1 top-1 text-white hidden peer-checked:block"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                >
                    <path d="M5 13l4 4L19 7" />
                </svg>
            </label>

        </div>
    )
}

export default CheckBox
