type ProfileButton = {
    text: string
    OnClick: (timeFrame: string) => void
    active: boolean
}

export default function ProfileButton( {text, OnClick, active} : ProfileButton ) {
    return(
        <button onClick={() => OnClick(text)} className={`hover:text-white ${active? 'text-white' : ''}`}>
            {text}
        </button>
    )
}