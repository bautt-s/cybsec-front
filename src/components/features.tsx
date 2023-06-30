import { AiOutlineMinus } from 'react-icons/ai'
import { TfiUnlock } from 'react-icons/tfi'
import { GiMicrochip } from 'react-icons/gi'
import { BsPersonExclamation } from 'react-icons/bs'
import { LiaMoneyBillWaveSolid } from 'react-icons/lia'

const FeaturesSection: React.FC = () => {
    const features = [
        {
            icon: <LiaMoneyBillWaveSolid className='text-white text-4xl' />,
            title: 'Financial crime',
            description: 'Financial well-being of your company is protected with our cyber insurance.'
        },
        {
            icon: <TfiUnlock className='text-white text-4xl' />,
            title: 'Loss of data',
            description: 'Losing data or accidentally sharing it cause headaches for you and your clients.'
        },
        {
            icon: <BsPersonExclamation className='text-white text-4xl' />,
            title: 'Human error',
            description: 'Human errors may cause significant financial losses.'
        },
        {
            icon: <GiMicrochip className='text-white text-4xl' />,
            title: 'Material Damage',
            description: "Covers you for the costs of repair if you're hit by a cyber attack."
        },
    ]

    return (
        <div className='px-[40px] 2xl:px-[240px] pb-[80px] lg:pb-[120px] w-fit mt-[60px] mx-auto xl:mx-0'>

            <div className="flex flex-col">
                <div className='flex flex-row items-center text-[#ff973c]'>
                    <AiOutlineMinus className='text-5xl lg:flex hidden' />
                    <span className="text-lg font-[700] tracking-wide mx-auto lg:mx-0">WHAT DOES IT INCLUDE</span>
                </div>

                <h1 className="text-5xl geologica font-[700] max-w-[15ch] leading-[55px] mt-[10px] text-[#353234] text-center lg:text-left mx-auto lg:mx-0">
                    What does cyber insurance cover?
                </h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-row gap-y-[20px] sm:gap-x-[20px] xl:gap-x-[100px] mt-[60px] z-50'>
                {features.map((f, index) =>
                    <div className='flex flex-col border-[2px] hover:border-[#343FE9] group px-[25px] py-[35px] rounded-xl 
                    transition-all duration-200 bg-white cursor-pointer' key={index}>
                        <div className='rounded-2xl w-fit p-[15px] group-hover:scale-105 bg-[#343FE9] transition-all duration-200'>
                            {f.icon}
                        </div>

                        <span className='mt-[20px] font-[500] text-lg'>{f.title}</span>

                        <p className='md:max-w-[22ch] mt-[5px]'>
                            {f.description}
                        </p>
                    </div>)}
            </div>

            <div className='border-t-[2px] border-dashed w-full h-[1px] relative bottom-[120px] -z-10 xl:flex hidden'></div>
        </div>
    )
}

export default FeaturesSection