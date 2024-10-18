import { useState } from "react";
import ProfileButton from "./ProfileButton"

type ProfileProps = {
    handleSetTime: (timeFrame: string) => void;
}

export default function Profile( {handleSetTime} : ProfileProps ) {
    const buttonName: string[] = ["Daily", "Weekly", "Monthly"];

    const [active, setActive] = useState<string>("Weekly");

    const handleButtonClick = (timeFrame: string) => {
      setActive(timeFrame);
      handleSetTime(timeFrame);
    }


    return(
      <div className="bg-cardBg mt-20 mx-6 rounded-xl md:row-start-1 md:row-end-3 md:flex md:flex-col md:mt-0 md:mx-0">
        <div className="bg-profile p-7 rounded-xl flex md-flex-1 md-items-start md:flex-col">
          <img src="./image-jeremy.png" className="border-white border-4 w-16 h-16 rounded-full md:w-24 md:h-24"></img>
          <div className="flex ml-4 justify-center align-center flex-col md:ml-0 md:mt-9">
            <div className="text-paleBlue text-sm">Report for</div>
            <div className="text-2xl text-white font-light md:text-4xl md:mb-20">Jeremy Robinson</div>
          </div>
        </div>
  
        <div className="flex text-desatBlue justify-between px-8 py-4 md:flex md:flex-col md:gap-3 md:items-start md:py-7">
          {buttonName.map((name) => (
            <ProfileButton text={name} OnClick={handleButtonClick} active={active===name}></ProfileButton>
          ))}
        </div>
      </div>
    )
  }