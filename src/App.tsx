import Calender from "./components/molecules/Calender";

function App() {
  // const now = new Date()
  // const year = now.getFullYear()
  // const month = now.getMonth() + 1
  
  // const daysInAMonth = new Date(year, month + 1, 0).getDate();
  // const firstDay = new Date(year, month, 1).getDay()
  // const NumberOfWeeks = Math.ceil(daysInAMonth / 7)


  // const days = [];
  // let weeks = []
  // const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // for (let i = 0; i < firstDay; i++) {
  //   days.push(null)
  // }

  // for (let i = 0; i < daysInAMonth; i++) {
  //   days.push(i)
  // }

  // for (let i = 0; i < days.length; i += 7) {
  //   weeks.push(days.slice(i, i + 7))
  // }

  // weeks = weeks.map(d => d.map((n, i) => {
  //   if (n !== null) {
  //     return [n, day[i]]
  //   } else {
  //     return null
  //   }
  // }))


  return (
    <>
      {/* {weeks.map(d => d.map(n => n &&
        <>
          <div>{n[1]}</div>
          <div>{n[0]}</div>
        </>))
      } */}

      <Calender/>

    </>
  )
}

export default App

