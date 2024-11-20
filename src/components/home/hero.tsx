// hero.js
import Image from 'next/image'
import img from "../../app/image/h1.png"


const Hero = () => {
  return (

    // bg-[#E6EFFE]
    <div
      className=""

    //  style={{
    //   backgroundImage: `url("https://img.freepik.com/free-vector/national-doctor-s-day-hand-drawn-background_23-2149438164.jpg?ga=GA1.1.490881575.1726385807&semt=ais_hybrid")`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   height: "100%"
    // }}
    >
      <div className=" flex flex-col md:flex-row gap-0 md:gap-10 ">
        {/* Left Column (Text) */}
        <div className="md:w-3/5 px-5 md:px-8 py-5 text-center  md:mt-9 md:text-left">
          <p className="text-xl mb-4 uppercase text-textLight tracking-wider">Bringing You the Best in Healthcare</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-textDark ">Quality <span className='text-primary'>Healthcare</span> Solution for all</h1>

          <p className="text-lg mt-6 text-textLight ">
            <span className='font-semibold'>Doctors Schedule</span> is your trusted platform to connect with healthcare professionals, view their schedules, and book appointments with ease.
          </p>

          <p className="text-lg mt-1 font-semibold text-textLight ">
            Schedule Appointments with Top Specialists Anytime, Anywhere.
          </p>

          <button className='bg-primary rounded mt-8 text-white px-4 py-3 hover:bg-btnHover duration-500 text-lg'>Appointment Now</button>
        </div>

        {/* Right Column (Image) */}
        <div className="md:w-2/5 mt-5">
          <Image
            src={img}
            alt="Doctor"
            width={200}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero





