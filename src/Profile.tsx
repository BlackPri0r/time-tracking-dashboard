import ProfileButton from "./ProfileButton"

export default function Profile() {
    const buttonName: string[] = ["Daily", "Weekly", "Monthly"];

    return(
      <div className="bg-cardBg mt-20 mx-6 rounded-xl">
        <div className="bg-profile p-7 rounded-xl flex">
          <img src="./image-jeremy.png" className="border-white border-4 w-16 h-16 rounded-full"></img>
          <div className="flex ml-4 justify-center align-center flex-col">
            <div className="text-paleBlue text-sm">Report for</div>
            <div className="text-2xl text-white font-light">Jeremy Robinson</div>
          </div>
        </div>
  
        <div className="flex text-desatBlue justify-between px-8 py-4">
          {buttonName.map((name) => (
            <ProfileButton text={name}></ProfileButton>
          ))}
        </div>
      </div>
    )
  }