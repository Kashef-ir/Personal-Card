import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";

export default function Footer() {
    return (
        <div className="social">
            <a href="https://github.com/Kashef-ir" className="social-icon hvr-grow">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://x.com/KashefSaltane" className="social-icon hvr-grow">
                <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://t.me/cornerperson" className="social-icon hvr-grow">
                <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://wa.me/+989029324456?text=urlencodedtext" className="social-icon hvr-grow">
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </div>
    );
}
