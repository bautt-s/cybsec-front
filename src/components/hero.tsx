import { BsArrowDown } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'

const heroPhoto = require('../assets/hero-photo.jpg')

const HeroSection: React.FC = () => {
    return (
        <div className="flex flex-col text-white h-screen bg-black">
            <nav className="absolute top-0 left-0 w-full flex flex-row px-[20px] lg:px-[40px] xl:px-[80px] pt-[40px] items-center">
                <div className="flex flex-row items-center">
                    <span className="font-[700] text-[#ff973c] text-2xl cursor-pointer mb-[5px] group hover:text-white transition-all duration-700">Cyb
                        <strong className="text-white group-hover:text-[#ff973c] transition-all duration-700">Sec</strong>
                    </span>

                    <ul className="flex-row gap-x-[25px] lg:gap-x-[60px] xl:gap-x-[80px] ml-[80px] lg:text-lg md:flex hidden">
                        <li className="cursor-pointer relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">How it works</li>
                        <li className="cursor-pointer relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Advantages</li>
                        <li className="cursor-pointer relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Fields</li>
                        <li className="cursor-pointer relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Plans</li>
                        <li className="cursor-pointer relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">About us</li>
                    </ul>
                </div>

                <div className='flex flex-row ml-auto items-center'>

                    <button className="group [transform:translateZ(0)] px-[30px] md:px-[20px] lg:px-[30px] py-[10px] rounded-full lg:bg-[#343FE9] bg-white overflow-hidden  
                    before:absolute before:bg-[#ff973c] lg:before:bg-gray-200 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full relative
                    hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500 font-[500] shadow-2xl">
                        <span className="relative z-0 group-hover:text-white lg:group-hover:text-black text-black lg:text-gray-200 transition ease-in-out duration-500">
                            Sign up
                        </span>
                    </button>

                    <HiMenu className='text-4xl text-white ml-[20px] cursor-pointer md:hidden' />
                </div>
            </nav>

            <div className="flex flex-row bg-white h-full">
                <div className="flex flex-col bg-[#343FE9] main-bg w-full pt-[200px] lg:pt-[160px] xl:pt-[200px] pb-[60px] h-screen 2xl:h-fit">
                    <div className='px-[20px] lg:px-[40px] xl:px-[70px] 2xl:pl-[240px] flex flex-col justify-center items-center lg:block'>
                        <div className='flex flex-row items-center justify-center lg:justify-normal'>
                            <AiOutlineMinus className='text-5xl hidden lg:flex' />
                            <span className="text-lg font-[700] tracking-wide ml-[10px]">CYBER INSURANCE</span>
                        </div>

                        <h1 className="max-w-[15ch] text-center lg:text-left text-5xl md:text-6xl geologica font-[700] tracking-wide leading-[60px] lg:leading-[65px] mt-[25px]">
                            Are you sure your business is secure from cyber attacks?
                        </h1>

                        <p className="max-w-[60ch] text-lg mt-[40px] lg:mt-[25px] tracking-wide text-center lg:text-left">
                            Keeping data secure matters - your information and anything that clients trust you with, Insurance gives you the support you need to keep going.
                        </p>

                        <div className="grid grid-cols-3 mt-[50px] bg-white w-full rounded-full shadow-xl">
                            <select className="bg-white text-gray-500 px-[15px] md:px-[40px] w-full py-[20px] rounded-l-full" name='client'>
                                <option value="startup">Startup</option>
                                <option value="charity">Charity</option>
                                <option value="freelancer">Freelancer</option>
                                <option value="large-company">Large Company</option>
                                <option value="other">Other</option>
                            </select>

                            <select className="bg-white text-gray-500 px-[15px] md:px-[40px] py-[20px] border-l w-full lg:ml-[40px]" name='country'>
                                <option value="0">Country:</option>
                            </select>

                            <button className="group [transform:translateZ(0)] rounded-full bg-[#FE881E] overflow-hidden relative  text-center flex justify-center items-center 
                            before:absolute before:bg-[#eb7610] before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full w-full lg:ml-[60px] xl:left-[60px]
                            hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500 font-[500] shadow-[-2px_0px_15px_-2px_rgba(0,0,0,0.3)]">
                                <span className="relative z-0 transition ease-in-out duration-500">
                                    Let's talk
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className='hidden lg:flex flex-row pl-[80px] lg:mt-[60px]'>
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

                <img src={heroPhoto} alt='cyber insurance expert'
                    className="w-[400px] 2xl:w-[1000px] h-screen xl:h-full ml-auto shadow-2xl 2xl:rounded-bl-xl object-cover hidden lg:flex" />
            </div>
        </div>
    )
}

export default HeroSection