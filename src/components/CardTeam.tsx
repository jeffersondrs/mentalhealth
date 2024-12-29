import facebook from "../assets/images/logos/facebook.svg";
import linkedin from "../assets/images/logos/linkedin.png";
import twitter from "../assets/images/logos/x.svg";

type CardTeamProps = {
  name: string;
  image: string;
  role: string;
  links: {
    linkedin: string;
    twitter: string;
    facebook: string;
  };
};
const CardTeam = ({ name, image, role, links }: CardTeamProps) => {
  return (
    <div className="bg-white w-full h-full flex flex-col items-center justify-center gap-2 p-4">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover"
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-">{name}</h1>
        <p className="text-sm text-center w-full max-w-72 text-gray-500">{role}</p>
      </div>
      <div className="flex gap-2 mt-2">
        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          className="bg-black rounded-full p-1 text-gray-50"
        >
          <img src={linkedin} alt="LinkedIn" className="w-2 h-2" />
        </a>
        <a
          href={links.twitter}
          target="_blank"
          rel="noreferrer"
          title="Twitter"
          className="bg-black rounded-full p-1"
        >
          <img src={twitter} alt="Twitter" className="w-2 h-2" />
        </a>
        <a
          href={links.facebook}
          target="_blank"
          rel="noreferrer"
          title="Facebook"
          className="bg-black rounded-full p-1"
        >
          <img src={facebook} alt="Facebook" className="w-2 h-2" />
        </a>
      </div>
    </div>
  );
};
export default CardTeam;
