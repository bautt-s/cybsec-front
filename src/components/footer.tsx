import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

const FooterSection: React.FC = () => {
    const categories = [
        {
            title: 'Product',
            items: ['Our Insurances', 'Consulting Services', 'Network', 'Content', 'Charity Fund']
        },
        {
            title: 'Community',
            items: ['Blog', 'Testimonials', 'Benefits', 'Clients']
        },
        {
            title: 'Resources',
            items: ['Academy', 'Integrations', 'Support', 'Partnerships']
        },
        {
            title: 'Company',
            items: ['About Us', 'Careers', 'FAQs', 'Teams', 'Our Values']
        }
    ]

    return (
        <footer className="bg-[#F4F9FC] flex flex-col">
            <span className="w-fit flex mx-auto font-[700] text-[#ff973c] text-3xl cursor-pointer mt-[40px] hover:text-[#353234] transition-all duration-700 group">Cyb
                <strong className="text-[#353234] group-hover:text-[#ff973c] transition-all duration-700">Sec</strong>
            </span>

            <div className="grid grid-cols-2 lg:grid-cols-5 mx-auto lg:mt-[40px] text-black px-[40px] lg:px-0">
                {categories.map((c, index) =>
                    <div key={index} className='w-fit mt-[40px] lg:mt-0'>
                        <h3 className="geologica text-xl font-[500]">{c.title}</h3>

                        <ul>
                            {c.items.map((i, subIndex) =>
                                <li key={subIndex} className="mt-[15px] hover:text-[#ff973c] transition-all duration-300 cursor-pointer w-fit">
                                    {i}
                                </li>)}
                        </ul>
                    </div>)}

                <div className='flex flex-col mt-[40px] lg:mt-0'>
                    <h4 className="geologica text-xl font-[500]">Contact Us</h4>

                    <div className='flex flex-row items-center mt-[15px]'>
                        <HiOutlineLocationMarker className='text-2xl text-[#353234]' />
                        <span className='ml-[15px]'>Wisconsin Ave, Suite 700 <br />Chevy Chase, Maryland 20815</span>
                    </div>

                    <div className='flex flex-row items-center mt-[15px]'>
                        <FiMail className='text-2xl text-[#353234]' />
                        <a href='mailto:cybsec@yahoo.co' className='ml-[15px] hover:underline decoration-[2px] decoration-[#ff973c]'>cybsec@yahoo.co</a>
                    </div>

                    <div className='flex flex-row text-2xl gap-x-[20px] mt-[25px] text-[#353234]'>
                        <BsInstagram className='cursor-pointer hover:text-[#ff973c] transition-all duration-300' />
                        <BsFacebook className='cursor-pointer hover:text-[#ff973c] transition-all duration-300' />
                        <BsTwitter className='cursor-pointer hover:text-[#ff973c] transition-all duration-300' />
                        <BsLinkedin className='cursor-pointer hover:text-[#ff973c] transition-all duration-300' />
                    </div>
                </div>
            </div>

            <div className='bg-[#343FE9] w-full flex flex-row mt-[60px] py-[15px] px-[10px] lg:px-[300px] contact-bg'>
                <span className='geologica text-gray-300 text-xs md:text-sm'>© 2023 <br className='flex md:hidden' />All Rights Reserved</span>

                <ul className='ml-auto gap-x-[15px] md:gap-x-[40px] flex flex-row text-white geologica text-xs md:text-sm'>
                    <li className='cursor-pointer max-w-[5ch] lg:max-w-none'>Privacy Policy</li>
                    <li className='cursor-pointer max-w-[7ch] lg:max-w-none'>Terms of Use</li>
                    <li className='cursor-pointer max-w-[7ch] lg:max-w-none'>Safes and Refunds</li>
                    <li className='cursor-pointer'>Legal</li>
                    <li className='cursor-pointer'>Site Map</li>
                </ul>
            </div>
        </footer>
    )
}

export default FooterSection