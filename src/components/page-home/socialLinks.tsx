import Image from "next/image";

type SocialLinkProps = {
  socialLink: {
    name: string;
    url: string;
    icon: string;
  };
};

export default function SocialLinks({ socialLink }: SocialLinkProps) {
  return (
    <a
      href={socialLink.url}
      target="_blank"
      rel="noopener noreferrer"
      key={socialLink.name}
    >
      <Image
        src={socialLink.icon}
        alt={socialLink.name}
        width={40}
        height={40}
      />
    </a>
  );
}
