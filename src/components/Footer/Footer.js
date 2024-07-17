import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faSlack } from "@fortawesome/free-brands-svg-icons/faSlack";

export default function Footer() {
    return (
        <div className="social">
            <a href="" className="social-icon hvr-grow">
                <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="" className="social-icon hvr-grow">
                <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="" className="social-icon hvr-grow">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="" className="social-icon hvr-grow">
                <FontAwesomeIcon icon={faSlack} />
            </a>
        </div>
    );
}
