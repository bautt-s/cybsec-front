const ContactSection: React.FC = () => {
    return (
        <div className="px-[240px] pb-[140px] pt-[40px]">
            <div className="flex flex-col items-center justify-center w-full bg-[#343FE9] rounded-[20px] pt-[60px] pb-[40px] contact-bg">
                <h1 className="text-6xl geologica font-[700] text-white text-center max-w-[25ch] tracking-wide">
                    Ready to make your business undetected against cyber crime?
                </h1>

                <div className="flex flex-row bg-white rounded-full relative top-[65px] shadow-2xl">
                    <input className="rounded-l-full w-[360px] px-[25px] text-lg mr-[40px]" placeholder="E-mail" />

                    <button className="group [transform:translateZ(0)] rounded-full bg-[#FE881E] overflow-hidden relative text-center flex justify-center items-center text-white
                            before:absolute before:bg-[#eb7610] before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full left-[60px] px-[60px] py-[15px]
                            hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500 font-[500] shadow-[-2px_0px_15px_-2px_rgba(0,0,0,0.3)]">
                        <span className="relative z-0 transition ease-in-out duration-500 ">
                            Let's talk
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactSection