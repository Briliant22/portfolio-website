import SocialLinks from "../page-home/socialLinks";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Briliant22",
      icon: "/icons/github.svg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-najmi-briliant/",
      icon: "/icons/linkedIn.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/najmibriliant",
      icon: "/icons/instagram.svg",
    },
  ];

  return (
    <footer className="w-full px-6 py-4 mb-[-64px] flex justify-between items-center border-t border-primary-800 text-primary-100">
      {/* Left: Name */}
      <span className="text-sm sm:text-base">
        © {new Date().getFullYear()} Najmi Briliant
      </span>

      {/* Right: Social Links */}
      <div className="flex gap-[36px]">
        {socialLinks.map((link, index) => (
          <SocialLinks key={index} socialLink={link} />
        ))}
      </div>
    </footer>
  );
}
