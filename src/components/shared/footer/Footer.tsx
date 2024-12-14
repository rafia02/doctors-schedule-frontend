"use client"

import Image from 'next/image';
import Link from 'next/link';
import facebook from '../../../app/image/social/facebook-logo.png'
import linkedin from '../../../app/image/social/linkedin-logo.png'
import twitter from '../../../app/image/social/twitter-logo.png'
// import whatsapp from '../../../app/image/social/whatsapp-logo.png'


const Footer = () => {
  return (
    <footer className="bg-secondery text-[#000000] pt-20 mt-24 ">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6">
      {/* About Us Section */}
      <div className='col-span-2'>
        <h2 className="text-[24px] font-[700] mb-7 text-[#39394a]">Doctors Schedule</h2>
        <p className="text-md text-textLight pr-5">
          Our Doctors Portal is committed to providing top-quality healthcare services, connecting patients with trusted doctors, and offering 24/7 support for all your healthcare needs.
        </p>
        <div className='flex gap-3 mt-4 '>
          <Image src={facebook} width={30} height={30} alt='facebook' className='bg-white rounded-full' />
          <Image src={linkedin} width={30} height={30} alt='facebook'  className='bg-white rounded-full' />
          <Image src={twitter} width={30} height={30} alt='facebook' className='bg-white rounded-full' />
          {/* <Image src={whatsapp} width={30} height={30} alt='facebook' className='bg-white rounded-full' /> */}
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h2 className="text-[24px] font-[700] mb-7 text-[#39394a] ">Our Services</h2>
        <ul className="space-y-5 text-sm text-gray-400">
          <li><Link href="#" className="transition text-textLight text-[16px] font-[500] "> Online Consultation</Link></li>
          <li><Link href="#" className="transition text-textLight text-[16px] font-[500] "> Book Appointments</Link></li>
          <li><Link href="#" className="transition text-textLight text-[16px] font-[500] "> Health Checkups</Link></li>
          <li><Link href="#" className="transition text-textLight text-[16px] font-[500] "> Emergency Care</Link></li>
        </ul>
      </div>
      {/* className="hover:text-white transition" */}
      {/* Contact Us Section */}
      <div>
        <h2 className="text-[24px] font-[700] mb-7 text-[#39394a]">Information</h2>
        <ul className="space-y-5 text-sm text-gray-400">
          <li><Link href="#" className="transition text-textLight text-[16px] font-[500] ">Health St, Bogra, Bangladesh </Link></li>
          <li><Link href="#" className="transition text-textLight text-[16px] font-[500] ">Phone: +880 123 456 789</Link></li>
          <li><Link href="#" className="transition text-textLight text-[16px] font-[500] ">Email: info@doctorportal.com</Link></li>
          <li><Link href="#" className="transition text-textLight text-[16px] font-[500] ">Emergency helfline call</Link></li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div>
      <h2 className="text-[24px] font-[700] mb-7 text-[#39394a]">Contact Info</h2>
        <ul className="space-y-5 text-sm text-gray-400">
          <li><Link href="#" className="transition text-textLight text-[16px] font-[500] ">Health St, Bogra, Bangladesh </Link></li>
          <li><Link href="#" className="transition text-textLight text-[16px] font-[500] ">Phone: +880 123 456 789</Link></li>
          <li><Link href="#" className="transition text-textLight text-[16px] font-[500] ">Email: info@doctorportal.com</Link></li>
          <li><Link href="#" className="transition text-textLight text-[16px] font-[500] ">Emergency helfline call</Link></li>
        </ul>
        
      </div>

    </div>
    <div className="border-t border-gray-400 mt-20 py-6 text-center text-sm tracking-wider text-textLight ">
      &copy; 2024 Doctors Portal. All rights reserved. All create develop by <span className='font-semibold' >Milon & Rafia</span> 
    </div>
  </footer>
  )
}

export default Footer;