
const AboutSection = () => {
    return (
        <div className="w-full flex flex-col-reverse md:flex-row gap-4 px-8 items-stretch">
            <div className="w-full md:w-1/2 rounded-2xl bg-[#1E1E1E] p-8 flex flex-col justify-between">
                <h4 className="text-2xl">ABOUT</h4>
                <div className="space-y-8">
                    <h1 className="mt-8 text-5xl">WHERE FASHION MEETS FREEDOM</h1>
                    <div className="w-full flex flex-col md:flex-row gap-6">
                        <p>We believe that fashion should be an expression of individuality. We encourage creativity and originality in every item we offer, presenting customers with exclusive collections from independent designers.
                            With a commitment to fostering a community of creativity and innovation,</p>
                        <p>we strive to connect designers with fashion enthusiasts who appreciate the artistry and individuality behind each piece. Driven by our dedication to authenticity, we curate each collection with a keen eye for unique designs that inspire confidence and self-expression.</p>
                    </div>
                </div>
            </div>
            <img className="w-full md:w-1/2 rounded-2xl object-cover object-center brightness-50" src="aboutImage.jpg" alt="about image" loading="lazy" />
        </div>
    )
}

export default AboutSection
