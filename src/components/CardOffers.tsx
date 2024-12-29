import Button from "./Button";

type CardOffersProps = {
  title: string;
  image?: string;
  onClick?: () => void;
  className?: string;
};
const CardOffers = ({ title, image, onClick, className }: CardOffersProps) => {
  return (
    <div
      className={`flex flex-col relative rounded-2xl justify-center items-start ${className} p-6 gap-10 max-w-[310px] h-full max-h-72`}
    >
      <h1 className="text-xl">{title}</h1>
      <Button
        title="Leia mais"
        onClick={onClick}
        className="bg-gray-50 border border-emerald-700 text-[#629D8C] text-sm hover:bg-emerald-50"
      />
      <img src={image} alt={title} className="absolute bottom-0 right-0 w-32" />
    </div>
  );
};

export default CardOffers;
