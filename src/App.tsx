import Profile from './Profile'
import TimeTracker from './TimeTracker'
import data from './data.json'

function App() {

  return (
    <>
      <div className="mx-auto grid grid-cols-1 gap-7">
        <Profile/>
        {data.map((item) => (
          <TimeTracker title={item.title} current={item.timeframes["weekly"].current} previous={item.timeframes["weekly"].previous} image={item.image} color={item.color}></TimeTracker> 
        ))}
      </div>
    </>
  )
}

export default App
