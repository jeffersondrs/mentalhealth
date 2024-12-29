import { statistics } from "../utils/statistics";

const Statistics = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen-2xl py-10 bg-gray-50">
      <div className="md:grid md:grid-cols-3 justify-items-center w-full max-w-6xl flex">
        {[...statistics].map((statistic) => (
          <StatisticItem
            key={statistic.id}
            number={statistic.name}
            description={statistic.description}
          />
        ))}
      </div>
    </div>
  );
};

type StatisticItemProps = {
  number: string;
  description: string;
};

const StatisticItem = ({ number, description }: StatisticItemProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-1 px-4 w-full overflow-hidden">
      <h1 className="md:text-4xl text-base tracking-wider">{number}</h1>
      <p className="text-xs text-center md:text-start md:w-full md:max-w-28 w-24 tracking-wider">
        {description}
      </p>
    </div>
  );
};

export default Statistics;
