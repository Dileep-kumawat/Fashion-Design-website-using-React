
const FeatureCard = ({ elem }) => {
    return (
        <div className="bg-[#1E1E1E] space-y-4 rounded-xl p-8 w-full md:w-1/4">
            <h1 className="uppercase text-xl font-semibold">{elem.name}</h1>
            <p className="text-gray-400">{elem.p}</p>
            <button className="uppercase font-semibold space-x-2 mt-2"><i className="p-2 bg-[#3B3B3B] border rounded-full ri-arrow-right-up-line"></i> <span>learn more</span></button>
        </div>
    )
}

export default FeatureCard
