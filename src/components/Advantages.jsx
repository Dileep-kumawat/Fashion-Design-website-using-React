import Advantage from "./Advantage"

const Advantages = () => {
    const advantageList = [
        {
            side: "normal",
            image: "advan1.jpg",
            advantages: [
                {
                    name: "INDEPENDENT DESIGNERS",
                    p: "Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by independent designers."
                },
                {
                    name: "EXCLUSIVE & UNIQUITY",
                    p: "Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity."
                },
            ]
        },
        {
            side: "reverse",
            image: "advan2.jpg",
            advantages: [
                {
                    name: "HIGH QUALITY",
                    p: "Embrace superior craftsmanship with our meticulously curated, enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials, promising longevity and timeless style."
                },
                {
                    name: "ECO-FRIENDLY",
                    p: "Join our commitment to sustainability with eco-friendly fashion options. stylish yet mindful of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices."
                },
            ]
        },
    ]
    return (
        <div className="py-16 px-8">
            <h1 className="uppercase text-4xl mb-4">Our Advantages</h1>
            <div className="space-y-4">
                {advantageList.map((elem, idx) => {
                    return <Advantage elem={elem} key={idx} />
                })}
            </div>
        </div>
    )
}

export default Advantages
