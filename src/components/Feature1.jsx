import FeatureCard from "./FeatureCard"

const Feature1 = () => {
    const featuresList = [
        {
            name: "INDEPENDENCY",
            p: "Explore the creativity of independent designers from around the globe."
        },
        {
            name: "UNIQUITY",
            p: "Discover the charm of unique pieces that stand out effortlessly."
        },
        {
            name: "QUALITY",
            p: "Experience unparalleled craftsmanship and attention to detail."
        },
        {
            name: "SUSTAINABILITY",
            p: "Embrace eco-conscious fashion choices without compromising on style."
        },
    ]
    return (
        <div className="flex flex-col md:flex-row w-full gap-4 items-center">
            {featuresList.map((elem, idx) => {
                return <FeatureCard elem={elem} key={idx} />
            })}
        </div>
    )
}

export default Feature1
