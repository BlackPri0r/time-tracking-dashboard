type ProfileButton = {
    text: string
    OnClick: (timeFrame: string) => void
}

export default function ProfileButton( {text, OnClick} : ProfileButton ) {
    return(
        <button onClick={() => OnClick(text)}>
            {text}
        </button>
    )
}