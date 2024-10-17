type ProfileButton = {
    text: string
}

export default function ProfileButton( {text} : ProfileButton ) {
    return(
        <button>
            {text}
        </button>
    )
}