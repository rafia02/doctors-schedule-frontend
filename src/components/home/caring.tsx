import Image from "next/image"
import img1 from "../../app/image/home/Background (1).png"
import img2 from "../../app/image/home/Background (3).png"



const Caring = () => {
  return (
    <div className="py-16 px-5 md:px-8 text-textDark ">
      <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-20">

        <div className="md:w-1/2">
          <h6 className="tracking-widest text-sm md:text-[17px] uppercase">Compassionate Care for Patients Worldwide! </h6>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">Patient <span className="text-primary">Caring</span></h2>
          <p className="md:text-lg">Our goal is to deliver exceptional healthcare with the highest standards of courtesy, respect, and compassion. We are dedicated to creating a supportive environment where each patient feels valued and understood. It is our privilege to care for you, and we strive to be not only your first choice for healthcare but also your most trusted partner on the journey to wellness.</p>
          <ul className="mt-6 flex md:text-lg tracking-wide flex-col gap-3">
            <li className="flex items-center gap-3">
              <Image src="https://img.icons8.com/?size=60&id=59733&format=png&color=415da1" height={9} width={20} alt=""></Image>
              <p>Stay updated on your health.</p>
            </li>
            <li className="flex items-center gap-3">
              <Image src="https://img.icons8.com/?size=60&id=59733&format=png&color=415da1" height={9} width={20} alt=""></Image>
              <p>Stay updated on your health.</p>
            </li>
            <li className="flex items-center gap-3">
              <Image src="https://img.icons8.com/?size=60&id=59733&format=png&color=415da1" height={9} width={20} alt=""></Image>
              <p>Stay updated on your health.</p>
            </li>
          </ul>
        </div>


        <div className="md:w-1/2 ">
          <div className="relative w-full flex justify-end ">

            <div>
              <Image className="relative rounded border-8 border-white " src="https://media.istockphoto.com/id/1183441656/photo/nurse-holding-patients-hands.jpg?s=612x612&w=0&k=20&c=GL6iuL1MFCpvPRJCaQUa5yrkLxW7U19uz7RJojkzBWw=" height={350} width={450} alt=""></Image>
              <div className="absolute backdrop-blur-sm border-r-4 border-r-primary bg-white/50 px-4 py-2  lg:left-[65px] top-7">
                <div className="flex items-center gap-2">
                  <Image src="https://img.icons8.com/?size=100&id=jShwZ2RCyPSO&format=png&color=415da1" height={10} width={25} alt=""></Image>
                  <p className="font-bold">Free Consultation</p>
                </div>
                <p className="text-sm">Consult with top specialists</p>
              </div>
            </div>
            <div className=" hidden md:block absolute right-20 top-2/4 overflow-hidden">
              <Image className="rounded border-8 border-white w-[70%] h-full " src="https://img.freepik.com/free-photo/patient-consulting-doctor_1170-2109.jpg?t=st=1731067049~exp=1731070649~hmac=5907e3860d67311c09981b2b53f16133ad223bc6a65832730966fa9d9362d637&w=900" height={250} width={450} alt=""></Image>
              <div className="absolute inset-0 bg-primary opacity-5 rounded-lg"></div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Caring