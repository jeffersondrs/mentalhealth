type CardInitialProps = {
  image?: string;
  className?: string;
};
const CardInitialSection = ({ className, image }: CardInitialProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-5 w-full max-w-60 h-full min-h-60 md:min-h-80 rounded-2xl relative ${className}`}
    >
      {image && (
        <figure className="w-full h-full rounded-b-xl flex items-center justify-center">
          <img
            src={image}
            alt="Imagem de fundo"
            className="w-full h-full absolute bottom-0 left-0 object-cover rounded-b-xl"
          />
          <figcaption className="absolute w-full bottom-0 left-0 rounded-b-xl text-[8px] text-white p-2 text-start">
            Origem da imagem:
            <a
              href="https://www.freepik.com/photos/people"
              className="text-white underline"
            >
              Freepik
            </a>
          </figcaption>
        </figure>
      )}
    </div>
  );
};

export default CardInitialSection;
