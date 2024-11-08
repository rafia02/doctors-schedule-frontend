import Image from "next/image"
import icon1 from "../../app/image/home/icons/icons8-trust-50 (1).png"
import icon2 from "../../app/image/home/icons/correct.png"

const OnlineServiceSection = () => {
  return (
    <section className="px-5 md:px-8 py-36 font-jakarta">
      <div className=" grid md:grid-cols-2 items-center gap-10 md:gap-24">

        {/* Column 1 - Image with Overlay & Badge */}
        <div className="relative">
          <div className="relative overflow-hidden rounded ">
            <video autoPlay loop muted playsInline controls src="https://media.istockphoto.com/id/1977162496/video/old-disabled-woman-lying-in-hospital-bed-having-an-online-video-call-with-a-doctor.mp4?s=mp4-640x640-is&k=20&c=8L0oz7LDXXBtnFFfsWtFuVDzfjqqhfPNKxU9aAc-9YE="></video>
            <div className="absolute inset-0 bg-btnHover opacity-20 rounded-lg"></div>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col items-center gap-1 bg-primary text-sm tracking-widest absolute bottom-5 -right-14 text-white  font-bold py-4 px-6 ">
              <Image height={40} width={50} src={icon1} alt=""></Image>
              <div className="text-center">
                Trusted by 1,000+ <br /> Patients
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 - Text Content */}
        <div className="space-y-4 text-textLight">
          <div className="text-2xl md:text-4xl font-semibold">
            <h2 className="mb-[3px]">Effortless <span className="text-primary">Online Consultations</span></h2>
            <h2><span className="text-primary">Expert Care</span> Anytime, Anywhere</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Speak with certified healthcare professionals from the comfort of your home. Our secure video consultations provide the highest quality care, helping you manage your health on your terms.
          </p>

          <div className="">
            <ul className="flex flex-col gap-2">
              <li className="flex gap-5 items-center">
                <div className="">
                  <Image className='' height={25} width={35} src={icon2} alt=""></Image>
                </div>
                <div>
                  <h5 className="text-lg font-bold tracking-wider">Instant Appointments</h5>
                  <p>Book and connect within minutes</p>
                </div>
              </li>


              <li className="flex gap-5 items-center">
                <div className="">
                  <Image className='' height={25} width={35} src={icon2} alt=""></Image>
                </div>
                <div>
                  <h5 className="text-lg font-bold tracking-wider">Certified Experts</h5>
                  <p>Experienced doctors across specialties</p>
                </div>
              </li>



              <li className="flex gap-5 items-center">
                <div className="">
                  <Image className='' height={25} width={35} src={icon2} alt=""></Image>
                </div>
                <div>
                  <h5 className="text-lg font-bold tracking-wider">Flexible Scheduling</h5>
                  <p>Set appointments to fit your lifestyle</p>
                </div>
              </li>




              {/* <li className="flex items-center text-blue-800">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m5-2A10 10 0 1 1 3.01 3.55"></path></svg>
                <strong>Secure & Private</strong>: Your data is encrypted and protected.
              </li> */}


            </ul>
          </div>

          {/* <button className="mt-8 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-lg transform transition hover:bg-blue-700 hover:shadow-xl focus:outline-none">
            Start Your Consultation
          </button> */}


          <button className='bg-primary hover:bg-btnClr rounded text-sm md:text-[16px] text-white px-3 md:px-5 py-3 duration-500'>Start Your Consultation</button>

        </div>
      </div>
    </section>
  )
}

export default OnlineServiceSection