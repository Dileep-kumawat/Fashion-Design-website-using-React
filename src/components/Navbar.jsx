
const Navbar = () => {
    const navLinks = ['designers', 'collabs', 'events', 'blog', 'card', 'get in touch'];
    return (
        <div className="w-full py-4 px-8 flex justify-between items-center">
            <h1 className="cursor-pointer text-2xl">DVSY</h1>
            <div className="items-center gap-4 hidden md:flex">
                {navLinks.map((elem, idx) => {
                    return <div className={`py-2 cursor-pointer px-4 rounded ${idx === navLinks.length - 1 ? "bg-[#DF766C] text-black hover:bg-[#c35c53]" : "bg-[#212121] hover:bg-[#353535]"} active:scale-95 uppercase text-sm font-semibold`} key={idx}>{elem}</div>
                })}
            </div>
        </div>
    )
}

export default Navbar
