import Image from "next/image"
import img1 from "../../app/image/home/Background (1).png"
import img2 from "../../app/image/home/Background (3).png"



const Caring = () => {
  return (
    <div className="pt-20 px-5 md:px-8 pb-36 text-textDark bg-secondery">
      <div className="flex gap-20">

        <div className="w-1/2">
          <h6 className="tracking-widest uppercase">Compassionate Care for Patients Worldwide! </h6>
          <h2 className="text-5xl font-bold mt-2 mb-6">Patient <span className="text-primary">Caring</span></h2>
          <p className="text-lg">Our goal is to deliver exceptional healthcare with the highest standards of courtesy, respect, and compassion. We are dedicated to creating a supportive environment where each patient feels valued and understood. It is our privilege to care for you, and we strive to be not only your first choice for healthcare but also your most trusted partner on the journey to wellness.</p>
          <ul className="mt-6 flex flex-col gap-5">
            <li className="flex items-center gap-3">
              <Image src="https://img.icons8.com/?size=60&id=59733&format=png&color=415da1" height={9} width={20} alt=""></Image>
              <p className="text-lg font-semibold">Stay updated on your health.</p>
            </li>
            <li className="flex items-center gap-3">
              <Image src="https://img.icons8.com/?size=60&id=59733&format=png&color=415da1" height={9} width={20} alt=""></Image>
              <p className="text-lg font-semibold">Stay updated on your health.</p>
            </li>
            <li className="flex items-center gap-3">
              <Image src="https://img.icons8.com/?size=60&id=59733&format=png&color=415da1" height={9} width={20} alt=""></Image>
              <p className="text-lg font-semibold">Stay updated on your health.</p>
            </li>
          </ul>
        </div>


        <div className="w-1/2 ">
          <div className="relative w-full flex justify-end ">
            <Image className="relative rounded border-8 border-white " src="https://media.istockphoto.com/id/1183441656/photo/nurse-holding-patients-hands.jpg?s=612x612&w=0&k=20&c=GL6iuL1MFCpvPRJCaQUa5yrkLxW7U19uz7RJojkzBWw=" height={350} width={450} alt=""></Image>
            <div className=" absolute right-24 top-2/3 overflow-hidden">
              <Image className="rounded border-8 border-white w-full h-full " src="https://img.freepik.com/free-photo/patient-consulting-doctor_1170-2109.jpg?t=st=1731067049~exp=1731070649~hmac=5907e3860d67311c09981b2b53f16133ad223bc6a65832730966fa9d9362d637&w=900" height={250} width={400} alt=""></Image>
              <div className="absolute inset-0 bg-primary opacity-5 rounded-lg"></div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Caring