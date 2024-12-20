import "./Info.css"
import profileImg from "../../images/profile.jpg"

export default function Info() {
    return(
        <div>
            <img src={profileImg} alt="Profile" className="profile-img"></img>
            <h1 className="name">Mohammad Hashemi</h1>
            <h3 className="sub-name skill">Front-End Developer</h3>
            <h4 className="sub-name tech">ReactJs | Tailwind</h4>
        </div>
    )
}