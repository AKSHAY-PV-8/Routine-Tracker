
const Calender = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const numberOfWeeks = Array.from({ length: Math.ceil((firstDayOfMonth + daysInMonth) / 7) }).fill("WEEK")
  console.log(numberOfWeeks)

  const calender = [];
  const weeks = [];

  for (let day = 0; day < firstDayOfMonth; day++) {
    calender.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calender.push([i, days[calender.length % 7]])
  }

  for (let i = 0; i < calender.length; i += 7) {
    weeks.push(calender.slice(i, i + 7))
  }

  console.log(calender)

  return (
    <div className="m-4">
      <div className="flex gap-2 mb-3">
        {numberOfWeeks.map((week, i) =>
          <div className="text-[#22d3ee] bg-[#1e2d45] border text-[11px] font-bold px-8 py-1 rounded-lg whitespace-nowrap">{`${week} ${i + 1}`}</div>
        )}
      </div>

      <div className="flex  gap-2">
        {calender.map(day => day &&
          <div key={day[0]} className="text-[#5d6c83] text-[9px] font-bold">
            <div>{day[1]}</div>
            <div>{day[0]}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Calender


