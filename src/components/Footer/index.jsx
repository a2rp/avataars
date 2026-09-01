import {
    FaCodepen,
    FaEnvelope,
    FaFacebookF,
    FaGithub,
    FaGlobe,
    FaHeart,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa6";
import { links, supportLink } from "../../data/links";
import { Styled } from "./styled";

const icons = {
    portfolio: FaGlobe,
    github: FaGithub,
    codepen: FaCodepen,
    linkedin: FaLinkedinIn,
    facebook: FaFacebookF,
    youtube: FaYoutube,
    email: FaEnvelope,
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <div className="footerTop">
                <div className="brand">
                    <img
                        className="logo"
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Ashish Ranjan"
                    />

                    <div>
                        <p className="copyright">
                            &copy; {currentYear} Random Avataars
                        </p>

                        <p className="developed">
                            Developed by{" "}
                            <a
                                href="https://www.ashishranjan.net"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ashish Ranjan
                            </a>
                        </p>
                    </div>
                </div>

                <a
                    className="support"
                    href={supportLink.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaHeart />

                    <span>{supportLink.label}</span>
                </a>
            </div>

            <nav className="footerLinks" aria-label="Footer links">
                {links.map((item) => {
                    const Icon = icons[item.icon];
                    const isEmail = item.href.startsWith("mailto:");

                    return (
                        <a
                            key={item.id}
                            href={item.href}
                            target={isEmail ? undefined : "_blank"}
                            rel={isEmail ? undefined : "noreferrer"}
                        >
                            <Icon />

                            <span>{item.label}</span>
                        </a>
                    );
                })}
            </nav>
        </Styled.Wrapper>
    );
};

export default Footer;
