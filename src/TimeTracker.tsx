interface TimeFrames {
    current: number;
    previous: number;
}
  
interface TimeTrackerProps {
    title: string;
    timeFrames: TimeFrames; // Type for timeFrames
    timeText: string;
    color: string;
    image: string;
}

export default function TimeTracker( {title, timeFrames, timeText, image, color} : TimeTrackerProps) {
    return(
        <div className="text-white rounded-xl mx-7 bg-no-repeat bg-subjectBgP pt-10" 
        style={{backgroundColor: color, backgroundImage: `url(${image})`, backgroundPosition: 'top right'}}>
            <div className="bg-cardBg justify-between rounded-xl p-6 h-[100%] flex">

                <div className="">
                    <p className="text-lg">{title}</p>
                    <p className="text-3xl font-thin">{timeFrames.current}hrs</p>
                </div>

                <div className="justify-between flex flex-col items-end">
                    <img src="./icon-ellipsis.svg" className=""></img>
                    <p className="text-paleBlue text-sm pb-2">Last {timeText.toLowerCase()} - {timeFrames.previous}</p>
                </div>
            </div>
        </div>
    )
}