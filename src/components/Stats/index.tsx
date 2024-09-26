import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const stats = [
  {
    data: "200",
    title: "Nombre de client",
  },
  {
    data: "185",
    title: "Clients satisfaits",
  },
  {
    data: "3",
    title: "Pays",
  },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Nos statistiques"
          paragraph="Plus de 10 ans d'expérience à votre service"
          center
        />

        <div className="mt-5">
          <ul className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {stats.map((item, idx) => (
              <li
                key={idx}
                className="w-full rounded-lg bg-gray-800 px-12 py-4 text-center sm:w-auto"
              >
                <h4 className="text-4xl font-semibold text-white">
                  {item.data}
                </h4>
                <p className="mt-3 font-medium text-gray-400">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stats;
