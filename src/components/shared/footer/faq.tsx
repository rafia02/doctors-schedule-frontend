'use client';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import React, { useState } from 'react';

type FAQItem = {
    question: string;
    answer: string;
};


const faqs: FAQItem[] = [
    {
        question: 'How can I find the right doctor for my needs?',
        answer:
            'You can use our advanced search option to filter doctors by specialty, name, location, availability, and hospital affiliation. Select your criteria to view a list of doctors matching your preferences.',
    },
    {
        question: 'Can I book appointments online?',
        answer:
            'Yes, you can book appointments directly online. Select your preferred doctor, choose an available time slot, and confirm your booking.',
    },
    {
        question: 'Is there a fee for using Doctors Schedule?',
        answer:
            'Registration on the platform is free. Appointment fees are determined by the doctor and are displayed before you confirm your booking.',
    },
    {
        question: 'How do I cancel or reschedule an appointment?',
        answer:
            'Go to your dashboard and select "My Appointments." Choose the appointment you want to modify, then follow the steps to cancel or reschedule.',
    },
    // {
    //   question: 'Is my personal and medical information secure?',
    //   answer:
    //     'Yes, we prioritize the security of your data using advanced encryption technologies. Please refer to our privacy policy for detailed information.',
    // },
    {
        question: 'How can I consult a doctor online?',
        answer:
            'Many doctors on our platform offer online consultations. Look for the "Teleconsultation" badge on the doctor’s profile and book your session.',
    },
    {
        question: 'What should I do if I face issues with my booking?',
        answer:
            'If you encounter any problems, contact our support team via email at support@doctorsschedule.com or call us at +880-1234-567890 for assistance.',
    },
];

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    return (
        <div className="w-4/5 shadow mx-auto p-6">
            <div className='  '>
                {/* <div className='w-full '> */}
                {/* <Image className='w-full ' src="https://img.freepik.com/premium-photo/group-happy-doctors-hospital-corridor-portrait_484651-9332.jpg?w=900" height={800} width={600} alt=''></Image> */}
            </div>
            {/* <div className=''> */}
                <h2 className="text-2xl md:text-4xl text-center text-textDark font-bold mb-6">Frequently Asked Questions</h2>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={` bg-[#f8f9fd] rounded-lg border shadow-lg}`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full border-b flex justify-between items-center px-6 py-4 text-left font-semibold"
                            >
                                <span className="text-lg">{faq.question}</span>
                                <ChevronDownIcon
                                    className={`w-6 h-6  ${activeIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden bg-white text-gray-800 px-6  ${activeIndex === index ? 'max-h-screen py-4' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-base">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Faq