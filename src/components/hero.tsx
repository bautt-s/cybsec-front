import { BsArrowDown } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'

const heroPhoto = require('../assets/hero-photo.jpg')

const HeroSection: React.FC = () => {
    return (
        <div className="flex flex-col text-white h-screen bg-black">
            <nav className="absolute top-0 left-0 w-full flex flex-row px-[80px] pt-[40px] items-center">
                <div className="flex flex-row items-center">
                    <span className="font-[700] text-[#ff973c] text-2xl cursor-pointer mb-[5px] group hover:text-white transition-all duration-700">Cyb
                        <strong className="text-white group-hover:text-[#ff973c] transition-all duration-700">Sec</strong>
                    </span>

                    <ul className="flex flex-row gap-x-[80px] ml-[80px] text-lg">
                        <li className="cursor-pointer relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">How it works</li>
                        <li className="cursor-pointer relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Advantages</li>
                        <li className="cursor-pointer relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Fields</li>
                        <li className="cursor-pointer relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Plans</li>
                        <li className="cursor-pointer relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">About us</li>
                    </ul>
                </div>

                <button className="group [transform:translateZ(0)] px-[30px] py-[10px] rounded-full bg-[#343FE9] overflow-hidden relative 
                before:absolute before:bg-gray-200 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full 
                hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500 ml-auto font-[500] shadow-2xl">
                    <span className="relative z-0 group-hover:text-black text-gray-200 transition ease-in-out duration-500">
                        Sign up
                    </span>
                </button>
            </nav>

            <div className="flex flex-row bg-white h-full">
                <div className="flex flex-col bg-[#343FE9] main-bg w-full h-fit pt-[200px] pb-[60px]">
                    <div className='pl-[240px]'>
                        <div className='flex flex-row items-center'>
                            <AiOutlineMinus className='text-5xl' />
                            <span className="text-lg font-[700] tracking-wide ml-[10px]">CYBER INSURANCE</span>
                        </div>

                        <h1 className="max-w-[15ch] text-6xl geologica font-[700] tracking-wide leading-[65px] mt-[25px]">
                            Are you sure your business is secure from cyber attacks?
                        </h1>

                        <p className="max-w-[60ch] text-lg mt-[25px] tracking-wide">
                            Keeping data secure matters - your information and anything that clients trust you with, Insurance gives you the support you need to keep going.
                        </p>

                        <div className="flex flex-row mt-[50px] bg-white w-full rounded-full shadow-xl">
                            <select className="bg-white text-gray-500 px-[40px] py-[20px] mr-[40px] rounded-l-full w-[35%]" name='client'>
                                <option value="large-company">Large Company</option>
                                <option value="startup">Startup</option>
                            </select>

                            <select className="bg-white text-gray-500 px-[40px] py-[20px] w-[35%] border-l" name='country'>
                                <option value="0">Country:</option>
                            </select>       

                            <button className="group [transform:translateZ(0)] rounded-full bg-[#FE881E] overflow-hidden relative ml-[40px] text-center flex justify-center items-center 
                            before:absolute before:bg-[#eb7610] before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full left-[60px] w-[20%]
                            hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500 font-[500] shadow-[-2px_0px_15px_-2px_rgba(0,0,0,0.3)]">
                                <span className="relative z-0 transition ease-in-out duration-500">
                                    Let's talk
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-row pl-[80px] mt-[60px]'>
                        <span className="[writing-mode:vertical-lr] flex flex-row items-center cursor-pointer group">
                            Scroll
                            <BsArrowDown className='text-2xl mt-[10px] group-hover:mt-[20px] transition-all duration-300' />
                        </span>

                        <div className='flex flex-col ml-auto mt-[60px] photo-model relative mr-[40px] pr-[20px] h-fit'>
                            <span className='geologica font-[500]'>Jamal Gundogän</span>
                            <span>Cyber insurance expert</span>
                        </div>
                    </div>
                </div>

                <img src={heroPhoto} className="w-[1000px] h-full ml-auto shadow-2xl rounded-bl-xl object-cover" />
            </div>
        </div>
    )
}

export default HeroSection