import AdvantageCard from "./AdvantageCard"

const Advantage = ({ elem }) => {
  return (
    <div className={`w-full flex gap-4 items-stretch ${elem.side === "reverse" ? "flex-col md:flex-row-reverse" : "md:flex-row flex-col"}`}>
      <img className="w-full md:w-1/2 h-[80vh] object-cover rounded-2xl" src={elem.image} alt="image" loading="lazy" />
      <div className="flex flex-col gap-4 w-full md:w-1/2 h-[80vh]">
        {elem.advantages.map((e, idx) => {
          return <AdvantageCard e={e} key={idx} />
        })}
      </div>
    </div>
  )
}

export default Advantage
