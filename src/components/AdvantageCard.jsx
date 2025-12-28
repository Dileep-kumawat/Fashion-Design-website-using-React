
const AdvantageCard = ({ e }) => {
    console.log(e);
    return (
        <div className={`w-full flex flex-col justify-between h-1/2 rounded-2xl p-8 bg-[#1E1E1E]`}>
            <h1 className="text-2xl">{e.name}</h1>
            <div className="w-full flex flex-col md:flex-row justify-between">
                <p className="md:w-2/3 text-sm md:text-base text-gray-400">{e.p}</p>
                <button className="uppercase w-fit font-semibold space-x-2 mt-4 md:mt-2"><i className="p-2 bg-[#3B3B3B] border rounded-full ri-arrow-right-up-line"></i> <span>learn more</span></button>
            </div>
        </div>
    )
}

export default AdvantageCard
