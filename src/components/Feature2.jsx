
const Feature2 = () => {
    const featureList = [
        {
            name: "DESIGNERS",
            value: "150+"
        },
        {
            name: "CLIENTS",
            value: "500+"
        },
        {
            name: "MASTERPIECES",
            value: "20K+"
        },
        {
            name: "EVENTS",
            value: "50+"
        },
    ]
    return (
        <div className="w-full flex flex-wrap md:flex-nowrap space-y-4 px-4 md:px-8 py-4 justify-between items-center">
            {featureList.map((elem, idx) => {
                return <div key={idx}>
                    <h4 className="text-gray-500 uppercase">{elem.name}</h4>
                    <h1 className="text-5xl">{elem.value}</h1>
                </div>
            })}
        </div>
    )
}

export default Feature2
