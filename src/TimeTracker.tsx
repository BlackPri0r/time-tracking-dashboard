interface TimeFrames {
    current: number;
    previous: number;
}
  
interface TimeTrackerProps {
    title: string;
    timeFrames: TimeFrames;
    timeText: string;
    color: string;
    image: string;
}

export default function TimeTracker( {title, timeFrames, timeText, image, color} : TimeTrackerProps) {
    
    let name;
    switch(timeText){
        case "daily":
            name = "Yesterday";
            break;
        case "weekly":
            name = "Last Week";
            break;
        case "monthly":
            name = "Last Month";
            break; 
    }


    return(
        <div className="text-white rounded-xl mx-7 bg-no-repeat bg-subjectBgP pt-10 md:pt-11 md:h-full md:mx-0" 
        style={{backgroundColor: color, backgroundImage: `url(${image})`, backgroundPosition: 'top right'}}>
            <div className="bg-cardBg justify-between rounded-xl p-6 h-[100%] flex hover:bg-cardHover">

                <div className="flex flex-col">
                    <p className="text-lg">{title}</p>
                    <p className="text-3xl font-thin md:text-5xl md:mt-5">{timeFrames.current}hrs</p>
                    <p className="text-paleBlue text-sm pb-2 md:text-left md:mt-2 hidden md:block">{name} - {timeFrames.previous}</p>
                </div>
                

                <div className="justify-between flex flex-col items-end">
                    <img src="./icon-ellipsis.svg" className=""></img>
                    <p className="text-paleBlue text-sm pb-2 md:text-left md:mt-2 md:hidden">{name} - {timeFrames.previous}</p> {/* dw about it lmao xd */}
                </div>
            </div>
        </div>
    )
}