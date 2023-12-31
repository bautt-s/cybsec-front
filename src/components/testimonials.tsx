import { AiOutlineMinus } from 'react-icons/ai'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { useState } from 'react'

const imgTestimonial1 = require('../assets/testimonials-1.jpg')
const imgTestimonial2 = require('../assets/testimonials-2.jpg')
const imgTestimonial3 = require('../assets/testimonials-3.jpg')

const TestimonialsSection: React.FC = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState(0)

    const handleTestimonial = (sum: boolean) => {
        if (sum && selectedTestimonial < 2) setSelectedTestimonial(selectedTestimonial + 1)
        else if (!sum && selectedTestimonial > 0) setSelectedTestimonial(selectedTestimonial - 1)
    }

    const testimonials = [{
        name: 'Lilly Beltrán',
        description: `"At first, I was skeptical about finding a reliable cyber security provider, but then I discovered this exceptional company.
        Their services have exceeded my expectations in every way. From the moment I reached out to them, their team displayed remarkable expertise and professionalism.
        They conducted a thorough assessment of my systems, identifying vulnerabilities and implementing tailored solutions to fortify my network.
        Their proactive monitoring and rapid response have provided me with peace of mind, knowing that my digital assets are safeguarded 24/7."`,
        img: imgTestimonial1
    }, {
        name: 'James Howlett',
        description: `"Finding a reliable cyber security partner was a priority for me, and I struck gold with this remarkable company. 
        Their team's expertise and dedication have been nothing short of exceptional. 
        They conducted a comprehensive analysis of my systems, identified vulnerabilities, and implemented robust solutions to fortify my digital infrastructure. 
        With their round-the-clock monitoring and swift response, I can rest easy knowing my data is safe. 
        I wholeheartedly recommend this company for their unmatched cyber security solutions. 
        Trust them to protect your online assets, and you won't be disappointed."`,
        img: imgTestimonial2
    }, {
        name: 'Rachel Geller',
        description: `"I consider myself fortunate to have found this outstanding company as my cyber security companion. 
        From the moment I engaged with their team, I knew I was in capable hands. 
        Their expertise and attention to detail were evident in every aspect of their service. 
        They meticulously assessed my systems, implemented customized security measures, and provided ongoing monitoring to ensure my digital environment remained secure. 
        With their unwavering commitment to excellence, I confidently recommend this company to anyone seeking the perfect cyber security partner. 
        Entrust your online protection to them, and you'll experience unmatched peace of mind."`,
        img: imgTestimonial3
    }]

    return (
        <div className='pb-[80px] pt-[80px] px-[40px] lg:pr-0 2xl:pl-[240px] flex flex-col lg:flex-row'>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center text-[#ff973c]'>
                    <AiOutlineMinus className='text-5xl lg:flex hidden' />
                    <span className="text-lg font-[700] tracking-wide mx-auto lg:mx-0">TESTIMONIALS</span>
                </div>

                <h1 className="text-5xl geologica font-[700] mt-[25px] text-[#353234] text-center lg:text-left">
                    What people say
                </h1>

                <p className='text-lg lg:text-xl max-w-[65ch] mt-[40px] leading-[35px] lg:leading-[40px] text-center lg:text-left mx-auto lg:mx-0 md:max-w-[50ch] lg:pr-[20px]'>
                    {testimonials[selectedTestimonial].description}
                </p>

                <span className='text-xl mt-[40px] lg:mt-[60px] underline decoration-[#ff973c] decoration-[3px] geologica font-[500] select-none mx-auto lg:mx-0'
                >- {testimonials[selectedTestimonial].name}
                </span>
            </div>

            <div className='lg:ml-auto text-xl text-white relative'>
                <div className='flex flex-row 2xl:absolute top-[60px] lg:top-[80px] 2xl:top-[50px] lg:right-[50px] 2xl:right-[550px] justify-center lg:justify-normal relative'>
                    <div onClick={() => handleTestimonial(false)} className={`p-[15px] rounded-l-full bg-[#ff973c] 
                    ${selectedTestimonial === 0 ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'} transition-all duration-200`}>
                        <BsChevronLeft />
                    </div>

                    <div onClick={() => handleTestimonial(true)} className={`p-[15px] rounded-r-full bg-[#ff973c] 
                    ${selectedTestimonial === 2 ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'} transition-all duration-200`}>
                        <BsChevronRight />
                    </div>
                </div>

                <img src={testimonials[selectedTestimonial].img} className='rounded-2xl lg:rounded-r-[0] lg:rounded-l-2xl object-cover 
                w-[600px] h-[600px] select-none duration-300 transition-all mt-[40px] lg:mt-0 mx-auto lg:mx-0' alt='client testimonial' />
            </div>
        </div>
    )
}

export default TestimonialsSection