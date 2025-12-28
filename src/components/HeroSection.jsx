
const HeroSection = () => {
    return (
        <div className="w-full px-8">
            <div className="w-full relative">
                <img className="w-full brightness-50 rounded-xl rotate-y-180 object-cover h-[85vh] object-center " src="heroImage.jpg" alt="heroImage" loading="lazy" />
                <div className="w-full flex flex-col justify-end h-full p-8 absolute top-0">
                    <h1 className="uppercase text-4xl md:text-9xl font-thin">Design</h1>
                    <h1 className="uppercase text-4xl md:text-9xl font-thin">& Freedom</h1>
                    <div className="flex flex-col md:flex-row w-full justify-between pt-3 md:pt-8">
                        <p className="md:w-1/3 w-full text-sm md:text-xl">Explore Independent Style by Embracing Uniqueness with Our Exclusive Designer Apparel</p>
                        <button className="text-xl mt-3 w-fit cursor-pointer active:scale-95"><i className="ri-arrow-down-line"></i> Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
