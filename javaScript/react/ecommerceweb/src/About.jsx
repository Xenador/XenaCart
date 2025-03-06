import React, { useState } from 'react'
  let About = ()=>{
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayName = daysOfWeek[today.getDay()];

    const [selectedDay, setSelectedDay] = useState(dayName);

    const handleDayChange = (event) => {
      setSelectedDay(event.target.value);
    };

    const isWeekend = selectedDay === 'Sunday' || selectedDay === 'Saturday';

    return (
      <div className='w-full h-screen bg-white text-black flex-col'>
        <div className='px-5'>
          <div className='p-4 mb-[16px] border-b-2 border-gray-200'>
            <p className='font-serif text-lg font-medium '>CONTACT US</p>
          </div>
        </div>
        <div className='text-center font-poppins'>
          <div className='mb-4 space-y-5'>
          <h2 className='text-2xl font-semibold'>AITREYA TECH SOLUTIONS</h2>
          <p className='text-gray-700'>We love our customers, so feel free to visit during normal business hours.</p>
          <p className='text-gray-700'>Aitreya Tech Solutions, Motilal Nehru National Institute of Technology,<br /> Allahabad, UP.-211004</p>
          </div>
          <div className='mb-7'>
            <a className='text-blue-600 hover:underline' href="mailto:admin@aitreyatech.com">admin@aitreyatech.com</a>
            <span> | </span>
            <a className='text-blue-600 hover:underline'  href="mailto:feedatease@gmail.com">feedatease@gmail.com</a>
          </div>
          <h2>Hours</h2>
          <div className='flex items-center justify-center'>
          {isWeekend ? ( <div> <p>Closed Today</p> </div> ) : ( <div className='flex gap-1 text-gray-700'>Open Today <div className='text-blue-600'> 09:00 am - 05:00 pm </div> </div> )}
          <select className=' p-2 border-0 text-gray-700' value={selectedDay} onChange={handleDayChange}>
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
          </div>
        </div>
      </div>
    );
  }

  export default About;