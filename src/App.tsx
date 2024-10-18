import { useState } from 'react'
import Profile from './Profile'
import TimeTracker from './TimeTracker'
import data from './data.json'

type dataItem = typeof data;
type TimeFrame = keyof dataItem[0]["timeframes"];

function App() {
  const [time, setTime] = useState<TimeFrame>('weekly');

  const handleSetTime = (timeFrame: string) => {
    setTime(timeFrame.toLowerCase() as TimeFrame);
  }
  
  return (
    <>
      <div className='flex justify-center min-h-dvh items-center'>
        <div className="mx-auto grid grid-cols-1 gap-7 md:grid md:grid-cols-4 justify-center md:max-w-6xl md:h-100 md:p-0 md:mx-0">
          <Profile handleSetTime={handleSetTime}/>
          { data.map((item) => (
            <TimeTracker title={item.title} timeFrames= {item.timeframes[time]} timeText={time} color={item.color} image={item.image}></TimeTracker> 
          ))}
        </div>
      </div>
    </>
  )
}

export default App
