
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

function Contact() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/sreyas-b-anand",
      label: "LinkedIn Profile",
      icon: <FaLinkedin size={24} />,
      external: true,
    },
    {
      href: "mailto:sreyas1045@gmail.com",
      label: "Send Email",
      icon: <MdEmail size={24} />,
      external: false,
    },
    {
      href: "https://github.com/sreyas-b-anand/",
      label: "GitHub Profile",
      icon: <ImGithub size={24} />,
      external: true,
    },
    {
      href: "https://www.instagram.com/sre___y___a___s",
      label: "Instagram Profile",
      icon: <FaInstagram size={24} />,
      external: true,
    },
    {
      href: "https://twitter.com/sre___y___as___/",
      label: "Twitter Profile",
      icon: <BsTwitterX size={24} />,
      external: true,
    },
  ];

  return (
    <main className="flex flex-col items-center pt-5 w-full">
       <div className="text-center font-semibold text-[18px] w-full text-accent flex items-center justify-center py-5">
          <p className="px-3 py-1 border max-w-[140px] text-center rounded-lg">Contact Me</p>
        </div>
      <div className="flex gap-5 p-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            aria-label={link.label}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="p-1 border hover:cursor-pointer hover:scale-[1.2] transition-all duration-[0.3s] ease-in-out rounded-lg  "
          >
            {link.icon}
          </a>
        ))}
      </div>
    </main>
  );
}

export default Contact;
