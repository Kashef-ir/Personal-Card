import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

export default function Footer() {
    return (
        <div className="social">
            <a href="https://x.com/KashefSaltane" className="social-icon hvr-grow">
                <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://t.me/cornerperson" className="social-icon hvr-grow">
                <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://github.com/Kashef-ir" className="social-icon hvr-grow">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    );
}
