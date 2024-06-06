import { TfiInstagram, TfiGithub, TfiLinkedin } from "react-icons/tfi";

const SocialMediaIcons = () => {
    const instagramLink = `https://www.instagram.com/akichawla1997/`;
    const gitHubLink = `https://github.com/akshatchawla1997`;
    const linkedInLink = `https://www.linkedin.com/in/akshat-sd1/`;
    const discord = ''

    return (
        <ul className="flex gap-6">
            <li className="cursor-pointer group transform transition-transform duration-500 hover:scale-125">
                <a
                    href={linkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <TfiLinkedin className="icon" />
                </a>
            </li>
            <li className="cursor-pointer group transform transition-transform duration-500 hover:scale-125">
                <a
                    href={gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <TfiGithub className="icon" />
                </a>
            </li>
            <li className="cursor-pointer group transform transition-transform duration-500 hover:scale-125">
                <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <TfiInstagram className="icon" />
                </a>
            </li>
        </ul>
    );
};

export default SocialMediaIcons;
