"use client"
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';

const BenifitCountup = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-center border-b border-gray-300 pb-10">
        <h1 className="text-5xl text-primary mb-2 font-semibold">
          {inView ? <CountUp end={8566} duration={2} separator="," /> : '0'}+
        </h1>
        <p className="text-lg tracking-wide text-textLight">Happy Patients</p>
      </div>
      <div className="grid grid-cols-2">
        <div className="text-center border-r border-gray-300 px-8 pt-10 pb-14">
          <h1 className="text-5xl text-primary mb-2 font-semibold">
            {inView ? <CountUp end={135} duration={2} separator="," /> : '0'}+
          </h1>
          <p className="text-lg tracking-wide text-textLight">Expert Doctors</p>
        </div>
        <div className="text-center px-8 pt-10">
          <h1 className="text-5xl text-primary mb-2 font-semibold">
            {inView ? <CountUp end={4.9} duration={2} decimals={1} /> : '0.0'}
          </h1>
          <p className="text-lg tracking-wide text-textLight">Average Rating</p>
        </div>
      </div>
    </div>



    // <div ref={ref} className="flex bg-primary flex-col">
    //   <div className="text-center border-b border-gray-300 pb-10">
    //     <h1 className="text-5xl text-white mb-2 font-semibold">
    //       {inView ? <CountUp end={8566} duration={2} separator="," /> : '0'}+
    //     </h1>
    //     <p className="text-lg tracking-wide text-textLight">Happy Patients</p>
    //   </div>
    //   <div className="grid grid-cols-2">
    //     <div className="text-center border-r border-gray-300 px-8 pt-10 pb-14">
    //       <h1 className="text-5xl text-white mb-2 font-semibold">
    //         {inView ? <CountUp end={135} duration={2} separator="," /> : '0'}+
    //       </h1>
    //       <p className="text-lg tracking-wide text-textLight">Expert Doctors</p>
    //     </div>
    //     <div className="text-center px-8 pt-10">
    //       <h1 className="text-5xl text-white mb-2 font-semibold">
    //         {inView ? <CountUp end={4.9} duration={2} decimals={1} /> : '0.0'}
    //       </h1>
    //       <p className="text-lg tracking-wide text-textLight">Average Rating</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default BenifitCountup