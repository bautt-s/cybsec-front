import { AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'

const PlansSection: React.FC = () => {
    const [planState, setPlanState] = useState({
        indexSelected: 1,
        monthly: true
    })

    const plansInfo = [{
        title: 'Freelancers',
        description: 'As a freelancer, insurance gives the reassurance that you are covered while browsing the web or exposing yourself to potential risks.',
        monthly: 9.99,
        yearly: 95
    }, {
        title: 'Businesses',
        description: 'If a hacker targets your business, or you or someone in your business accidentally shares something, it takes time and money to fix.',
        monthly: 39.99,
        yearly: 375
    }, {
        title: 'Charities',
        description: 'Insurance for charities provides esencial cover to take care of the times when things do not go according to the plan you expected.',
        monthly: 21.99,
        yearly: 210
    }]

    return (
        <div className="bg-[#F4F9FC] pb-[100px] pt-[80px]">
            <div className="flex flex-col px-[40px] 2xl:px-[240px]">
                <div className='flex flex-row items-center text-[#ff973c]'>
                    <AiOutlineMinus className='text-5xl lg:flex hidden' />
                    <span className="text-lg font-[700] tracking-wide mx-auto lg:mx-0">PRICE PLANS</span>
                </div>

                <div className='flex flex-col lg:flex-row items-center lg:items-start'>
                    <h1 className="text-5xl geologica font-[700] mt-[25px] text-[#353234] text-center md:text-left">
                        Who's cyber insurance for?
                    </h1>

                    <div className='flex flex-row lg:ml-auto items-center h-fit gap-[15px] mt-[40px] lg:mt-0'>
                        <span className={planState.monthly ? 'text-[#353234] font-[500]' : 'text-gray-400 font-[500]'}>Monthly</span>

                        <label className="toggle">
                            <input className="toggle-checkbox" type="checkbox" onClick={() => setPlanState({ ...planState, monthly: !planState.monthly })} />
                                <div className="toggle-switch"></div>
                        </label>

                        <span className={!planState.monthly ? 'text-[#353234] font-[500]' : 'text-gray-400 font-[500]'}>Yearly</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row mt-[60px] w-full mb-[40px] px-[40px] 2xl:px-[220px]'>
                {plansInfo.map((p, index) =>
                    <div key={index} onClick={() => setPlanState({ ...planState, indexSelected: index })} className={`rounded-[25px] pt-[40px] border cursor-pointer duration-300   
                    pb-[30px] px-[60px] lg:px-[20px] xl:px-[40px] ${planState.indexSelected === index ? 'bg-[#343FE9] shadow-2xl' : 'bg-white shadow-lg'} ${index !== 0 && 'lg:ml-auto flex flex-col mt-[60px] lg:mt-0'}
                    ${planState.indexSelected !== index && 'hover:bg-[#f8f8f8]'}`}>
                        <span className={planState.indexSelected === index ? 'text-white font-[500]' : 'text-[#ff973c] font-[500]'}>0{index + 1}</span>

                        <div className={planState.indexSelected === index ? 'text-white' : 'text-[#353234]'}>
                            <h4 className='text-3xl font-[700] geologica mt-[20px]'>{p.title}</h4>
                            <p className='mt-[25px] lg:max-w-[23ch] text-xl lg:text-lg xl:text-xl'>{p.description}</p>
                        </div>

                        <div className='flex flex-row mt-[50px] text-lg'>
                            <strong className={planState.indexSelected === index ? 'text-white' : 'text-[#353234]'}>{planState.monthly ? p.monthly : p.yearly}$</strong>
                            <span className={`${planState.indexSelected === index ? 'text-gray-300' : 'text-gray-500'}`}>{planState.monthly ? '/monthly' : '/yearly'}</span>
                        </div>

                        {planState.indexSelected === index &&
                            <button className='bg-[#FE881E] text-white font-[400] text-lg mx-auto flex rounded-full px-[30px] py-[10px] tracking-wide relative top-[55px] shadow-2xl'>
                                Buy Insurance
                            </button>}
                    </div>)}
            </div>

            <span className='text-[#353234] geologica text-xl font-[500] cursor-pointer underline decoration-[#ff973c] pl-[40px] 2xl:pl-[220px] relative top-[40px]'>
                See all price plans
            </span>
        </div>
    )
}

export default PlansSection