import { useState } from 'react'
import Profile from './Profile'
import TimeTracker from './TimeTracker'
import data from './data.json'

interface TimeFrames {
  current: number;
  previous: number;
}

interface Item {
  title: string;
  timeframes: {
    daily: TimeFrames;
    weekly: TimeFrames;
    monthly: TimeFrames;
  };
  color: string;
  image: string;
}

function App() {
  const [time, setTime] = useState("Weekly");

  const handleSetTime = (timeFrame: string) => {
    setTime(timeFrame)
  }
  return (

    <>
      <div className="mx-auto grid grid-cols-1 gap-7">
        <Profile handleSetTime={handleSetTime}/>
        { (data as Item[]).map((item) => (
          <TimeTracker title={item.title} timeFrames={item.timeframes[time.toLowerCase()]} timeText={time} color={item.color} image={item.image}></TimeTracker> 
        ))}
      </div>
    </>
  )
}

export default App
