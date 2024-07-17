import "./Info.css"
import profileImg from "../../images/20240401_1117291.jpg"

export default function Info() {
    return(
        <div>
            <img src={profileImg} alt="Profile" className="profile-img"></img>
            <h1 className="name">Mohammad Hashemi</h1>
            <h3 className="skill">Front-End Developer</h3>
            <h4 className="tech">ReactJs | Tailwind</h4>
        </div>
    )
}